import { Clock, Users, Presentation, Coffee, Award, MessageSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const programDays = [
  {
    day: "Day 1",
    title: "Foundations & Innovation",
    sessions: [
      { time: "09:00", title: "Opening Ceremony & Keynote", type: "keynote", icon: Award },
      { time: "10:30", title: "Research Track: AI in Healthcare", type: "session", icon: Presentation },
      { time: "12:00", title: "Networking Lunch", type: "break", icon: Coffee },
      { time: "14:00", title: "Panel: Breaking Barriers in Tech", type: "panel", icon: Users },
      { time: "16:00", title: "Workshop Sessions", type: "workshop", icon: MessageSquare },
    ]
  },
  {
    day: "Day 2",
    title: "Industry & Impact",
    sessions: [
      { time: "09:00", title: "Industry Keynote", type: "keynote", icon: Award },
      { time: "10:30", title: "Research Track: Sustainable AI", type: "session", icon: Presentation },
      { time: "12:00", title: "Networking Lunch", type: "break", icon: Coffee },
      { time: "14:00", title: "Panel: AI Ethics & Responsibility", type: "panel", icon: Users },
      { time: "16:00", title: "Poster Sessions & Demo", type: "session", icon: Presentation },
    ]
  },
  {
    day: "Day 3",
    title: "Future & Collaboration",
    sessions: [
      { time: "09:00", title: "Closing Keynote", type: "keynote", icon: Award },
      { time: "10:30", title: "Research Track: Advanced Computing", type: "session", icon: Presentation },
      { time: "12:00", title: "Closing Ceremony & Awards", type: "keynote", icon: Award },
      { time: "14:00", title: "Networking Reception", type: "break", icon: Coffee },
    ]
  }
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
            Three days of inspiring talks, collaborative workshops, and meaningful connections. 
            Full program details coming soon.
          </p>
          <Badge variant="outline" className="mt-4 text-sm py-1 px-4 border-primary/50 text-primary">
            Detailed Schedule TBD
          </Badge>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programDays.map((day, dayIndex) => (
            <div 
              key={dayIndex}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              {/* Day Header */}
              <div className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-b border-border">
                <span className="text-primary font-bold text-lg">{day.day}</span>
                <h3 className="text-xl font-semibold text-card-foreground mt-1">{day.title}</h3>
              </div>
              
              {/* Sessions */}
              <div className="p-4 space-y-3">
                {day.sessions.map((session, sessionIndex) => (
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
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-8 text-sm">
          * This is a preliminary program outline. Detailed sessions and speakers will be announced.
        </p>
      </div>
    </section>
  );
};

export default ProgramSection;
