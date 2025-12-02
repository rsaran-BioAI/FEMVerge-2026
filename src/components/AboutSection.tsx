import { Sparkles, Users, Lightbulb, Globe } from "lucide-react";

const highlights = [
  {
    icon: Sparkles,
    title: "Trailblazing Ideas",
    description: "Showcasing breakthrough innovations transforming AI across healthcare, sustainability, computing, and security."
  },
  {
    icon: Users,
    title: "Meaningful Collaboration",
    description: "Building bridges between academia and industry to foster partnerships that drive real-world impact."
  },
  {
    icon: Lightbulb,
    title: "Elevated Voices",
    description: "Amplifying the contributions of women driving AI's most exciting frontiers forward."
  },
  {
    icon: Globe,
    title: "Inclusive Future",
    description: "Creating a more diverse and impactful AI ecosystem for generations to come."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">About the Event</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            The Future of AI is <span className="text-primary">Female-Led</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            FEMverge 2026: AI Edition marks the launch of a bold new conference series celebrating 
            the women who are shaping the future of artificial intelligence. As the inaugural event, 
            it brings together pioneering researchers, industry innovators, and visionary leaders 
            whose breakthroughs are transforming domains from healthcare and sustainability to 
            advanced computing and security.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
