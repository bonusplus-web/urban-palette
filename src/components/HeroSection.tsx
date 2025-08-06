import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  return (
    <section className="relative hero-bg min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Fashion Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="fade-in-up">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent animate-gentle-bounce" />
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                New Collection
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Urban</span>
              <br />
              <span className="text-foreground">Fashion</span>
              <br />
              <span className="text-gradient">Redefined</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover contemporary streetwear that blends comfort with cutting-edge style. 
              Create your perfect look with our Virtual Closet experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg smooth-transition"
              >
                Explore Collection
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
              >
                Virtual Closet
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-accent/20 rounded-full floating-animation hidden lg:block"></div>
      <div className="absolute bottom-1/3 right-1/6 w-8 h-8 bg-primary/20 rounded-full floating-animation hidden lg:block" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-12 h-12 bg-secondary/30 rounded-full floating-animation hidden lg:block" style={{ animationDelay: '4s' }}></div>
    </section>
  );
};

export default HeroSection;