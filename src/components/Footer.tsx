import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram, MapPin, MessageSquare } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      {/* Contact Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Get In Touch</h3>
            <p className="text-primary-foreground/70 mb-8">
              Have questions? Want to register your interest or become a partner? We'd love to hear from you.
            </p>
            <ContactFormDialog
              inquiryType="interest"
              title="Contact Us"
              description="Send us a message and we'll get back to you as soon as possible."
              trigger={
                <Button className="bg-primary hover:bg-primary/90">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              }
            />
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-2xl font-bold">
              FEM<span className="text-primary">verge</span>
            </span>
            <p className="mt-4 text-primary-foreground/60 max-w-sm">
              A bold conference series celebrating the women who are shaping the future of artificial intelligence.
            </p>
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About", "Program", "Speakers", "Sponsors", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/60 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span>Location TBA</span>
              </li>
              <li>
                <ContactFormDialog
                  inquiryType="interest"
                  title="Contact Us"
                  description="Send us a message and we'll get back to you soon."
                  trigger={
                    <button className="text-primary-foreground/60 hover:text-primary transition-colors flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Send us a message
                    </button>
                  }
                />
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2026 FEMverge. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
