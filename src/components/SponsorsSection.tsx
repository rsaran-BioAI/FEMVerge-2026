import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const partners = [
  { name: "Partner TBD", placeholder: true },
  { name: "Partner TBD", placeholder: true },
  { name: "Partner TBD", placeholder: true },
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Partners</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            <span className="text-primary">Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join leading organizations in supporting women in AI. Partner with us to make a lasting impact.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-center text-lg font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
            Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center h-28 rounded-xl border-2 border-dashed border-border
                  bg-muted/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <span className="text-muted-foreground font-medium text-sm text-center px-4">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20">
            <h3 className="text-2xl font-bold mb-3 text-foreground">Become a Partner</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Support the advancement of women in AI and gain visibility among top researchers and industry leaders.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Mail className="w-5 h-5 mr-2" />
              Contact for Partnership
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
