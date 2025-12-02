import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

const organizers = [
  {
    name: "Dr. Runjhun Saran Narayan",
    role: "Conference Chair",
    affiliation: "",
  },
  {
    name: "Ms. Shreya Sharma",
    role: "Co-Organizer",
    affiliation: "",
  }
];

const OrganizersSection = () => {
  return (
    <section id="organizers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Meet Our Team</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Organizing <span className="text-primary">Committee</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders bringing together the brightest minds in AI to create an unforgettable experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {organizers.map((organizer, index) => (
            <Card 
              key={index}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-0">
                {/* Placeholder Avatar */}
                <div className="aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/30 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-card border-4 border-primary/30 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">
                      {organizer.name.split(' ').filter(n => n[0] !== '(' && n !== 'Dr.' && n !== 'Ms.' && n !== 'Mr.' && n !== 'Prof.').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">{organizer.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{organizer.role}</p>
                  {organizer.affiliation && (
                    <p className="text-muted-foreground text-sm mb-4">{organizer.affiliation}</p>
                  )}
                  
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <a 
                      href="#" 
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="#" 
                      className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizersSection;
