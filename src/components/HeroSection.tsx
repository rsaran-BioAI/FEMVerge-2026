import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 via-foreground/70 to-transparent" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary-foreground">Inaugural Event 2026</span>
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground">
            FEM<span className="text-primary">verge</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light mt-4 text-primary-foreground/80">
              AI Edition
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Celebrating the women who are shaping the future of artificial intelligence. 
            Join pioneering researchers, industry innovators, and visionary leaders.
          </p>
          
          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Coming 2026</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-primary-foreground/20" />
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Location TBA</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <ContactFormDialog
              inquiryType="interest"
              title="Register Your Interest"
              description="Be the first to know when registration opens for FEMverge 2026."
              trigger={
                <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  Register Interest
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              }
            />
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/50 bg-primary/10 text-primary-foreground hover:bg-primary/20"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
