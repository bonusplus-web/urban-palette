import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, ShoppingBag, Sparkles, ArrowRight } from "lucide-react";

const Index = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      rating: 5,
      text: "The Virtual Closet feature is amazing! I love how I can mix and match before buying.",
      avatar: "SC"
    },
    {
      name: "Marcus Johnson", 
      rating: 5,
      text: "Finally, sustainable fashion that doesn't compromise on style. The quality is exceptional.",
      avatar: "MJ"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "Customer service is outstanding and the clothes fit perfectly. Highly recommend!",
      avatar: "ER"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturedProducts />
      
      {/* Virtual Closet CTA */}
      <section className="py-20 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-accent animate-gentle-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold">
                Try Our <span className="text-gradient">Virtual Closet</span>
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience the future of fashion shopping. Mix, match, and visualize your perfect outfit before you buy.
            </p>
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg smooth-transition"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Start Styling
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Customers</span> Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who love our sustainable fashion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="p-6 text-center hover:shadow-lg smooth-transition fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {testimonial.avatar}
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/30 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
                <span className="text-xl font-bold text-gradient">URBN</span>
              </div>
              <p className="text-muted-foreground">
                Contemporary urban fashion that respects both style and sustainability.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/shop" className="hover:text-primary smooth-transition">All Products</a></li>
                <li><a href="/shop" className="hover:text-primary smooth-transition">New Arrivals</a></li>
                <li><a href="/shop" className="hover:text-primary smooth-transition">Sale</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/about" className="hover:text-primary smooth-transition">About Us</a></li>
                <li><a href="/contact" className="hover:text-primary smooth-transition">Contact</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="/contact" className="hover:text-primary smooth-transition">FAQ</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Returns</a></li>
                <li><a href="#" className="hover:text-primary smooth-transition">Shipping</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 URBN Fashion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
