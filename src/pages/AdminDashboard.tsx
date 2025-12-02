import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import { LogOut, Mail, MailOpen, RefreshCw } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type ContactMessage = Database["public"]["Tables"]["contact_messages"]["Row"];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/admin/login");
        return;
      }

      // Check if user is admin
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", session.user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (!roleData) {
        await supabase.auth.signOut();
        toast.error("Access denied");
        navigate("/admin/login");
        return;
      }

      fetchMessages();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") {
        navigate("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast.error("Failed to load messages");
      console.error(error);
    } else {
      setMessages(data || []);
    }
    setLoading(false);
  };

  const toggleReadStatus = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from("contact_messages")
      .update({ is_read: !currentStatus })
      .eq("id", id);

    if (error) {
      toast.error("Failed to update status");
    } else {
      setMessages(messages.map(m => m.id === id ? { ...m, is_read: !currentStatus } : m));
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const getInquiryBadgeVariant = (type: string) => {
    switch (type) {
      case "registration": return "default";
      case "interest": return "secondary";
      case "partnership": return "outline";
      default: return "default";
    }
  };

  const unreadCount = messages.filter(m => !m.is_read).length;

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-card border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">
              FEM<span className="text-primary">verge</span> Admin
            </h1>
            <p className="text-sm text-muted-foreground">
              {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={fetchMessages}>
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Messages</CardTitle>
            <CardDescription>All inquiries from the website</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-8 text-muted-foreground">Loading...</div>
            ) : messages.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">No messages yet</div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-8"></TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Organization</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((message) => (
                      <TableRow key={message.id} className={!message.is_read ? "bg-primary/5" : ""}>
                        <TableCell>
                          {message.is_read ? (
                            <MailOpen className="w-4 h-4 text-muted-foreground" />
                          ) : (
                            <Mail className="w-4 h-4 text-primary" />
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant={getInquiryBadgeVariant(message.inquiry_type)}>
                            {message.inquiry_type}
                          </Badge>
                        </TableCell>
                        <TableCell className="font-medium">{message.name}</TableCell>
                        <TableCell>
                          <a href={`mailto:${message.email}`} className="text-primary hover:underline">
                            {message.email}
                          </a>
                        </TableCell>
                        <TableCell>{message.organization || "-"}</TableCell>
                        <TableCell className="max-w-xs truncate">{message.message || "-"}</TableCell>
                        <TableCell className="whitespace-nowrap">
                          {new Date(message.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleReadStatus(message.id, message.is_read)}
                          >
                            {message.is_read ? "Mark unread" : "Mark read"}
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default AdminDashboard;
