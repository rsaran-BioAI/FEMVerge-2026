import { Clock, Users, Presentation, Coffee, Award, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const programSessions = [
  { time: "09:00", title: "Registration & Welcome Coffee", type: "break", icon: Coffee },
  { time: "10:00", title: "Opening Ceremony & Keynote", type: "keynote", icon: Award },
  { time: "11:30", title: "Research Track: AI Innovation", type: "session", icon: Presentation },
  { time: "12:30", title: "Networking Lunch", type: "break", icon: Coffee },
  { time: "14:00", title: "Panel: Women Shaping AI's Future", type: "panel", icon: Users },
  { time: "15:30", title: "Workshop Sessions", type: "workshop", icon: MessageSquare },
  { time: "17:00", title: "Closing Remarks & Networking", type: "keynote", icon: Award },
];

const getTypeColor = (type: string) => {
  switch (type) {
    case 'keynote': return 'bg-primary/10 text-primary border-primary/30';
    case 'panel': return 'bg-secondary/10 text-secondary border-secondary/30';
    case 'workshop': return 'bg-accent text-accent-foreground border-accent-foreground/30';
    case 'break': return 'bg-muted text-muted-foreground border-muted-foreground/30';
    default: return 'bg-card text-card-foreground border-border';
  }
};

const ProgramSection = () => {
  return (
    <section id="program" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Conference Schedule</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Program <span className="text-primary">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A full day of inspiring talks, collaborative workshops, and meaningful connections. 
            Full program details coming soon.
          </p>
          <Badge variant="outline" className="mt-4 text-sm py-1 px-4 border-primary/50 text-primary">
            Detailed Schedule TBD
          </Badge>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300">
            {/* Day Header */}
            <div className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
              <span className="text-primary font-bold text-lg">One Day Event</span>
              <h3 className="text-xl font-semibold text-card-foreground mt-1">Foundations, Innovation & Impact</h3>
            </div>
            
            {/* Sessions */}
            <div className="p-4 space-y-3">
              {programSessions.map((session, sessionIndex) => (
                <div 
                  key={sessionIndex}
                  className={`flex items-start gap-3 p-3 rounded-lg border ${getTypeColor(session.type)} transition-all hover:scale-[1.02]`}
                >
                  <div className="flex items-center gap-2 text-sm font-medium min-w-[60px]">
                    <Clock className="w-4 h-4" />
                    {session.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <session.icon className="w-4 h-4 shrink-0" />
                    <span className="text-sm font-medium">{session.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm">
          * This is a preliminary program outline. Detailed sessions and speakers will be announced.
        </p>
      </div>
    </section>
  );
};

export default ProgramSection;
