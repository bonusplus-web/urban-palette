import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Leaf, Heart, Award, Users, Target, Recycle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">About</span> URBN
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Redefining urban fashion through sustainable practices and contemporary design
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, URBN emerged from a simple vision: to create fashion that doesn't compromise on style or sustainability. We believe that contemporary urban wear should reflect our values and respect for the planet.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every piece in our collection is thoughtfully designed, ethically manufactured, and created to last. We work with artisans and suppliers who share our commitment to fair trade, environmental responsibility, and quality craftsmanship.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Sustainable</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Years Strong</div>
                </div>
              </div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👕</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Every product is made with eco-friendly materials and processes"
              },
              {
                icon: Heart,
                title: "Ethical Manufacturing",
                description: "Fair wages and safe working conditions for all our partners"
              },
              {
                icon: Award,
                title: "Quality First",
                description: "Premium materials and craftsmanship that stands the test of time"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building connections and supporting local communities worldwide"
              },
              {
                icon: Target,
                title: "Innovation",
                description: "Constantly pushing boundaries in design and sustainability"
              },
              {
                icon: Recycle,
                title: "Circular Fashion",
                description: "Promoting recycling, upcycling, and responsible consumption"
              }
            ].map((value, index) => (
              <Card 
                key={value.title} 
                className="p-6 text-center hover:shadow-lg smooth-transition fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sustainability <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our milestones towards a more sustainable future
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {[
                {
                  year: "2020",
                  title: "Company Founded",
                  description: "Started with a mission to create sustainable urban fashion"
                },
                {
                  year: "2021",
                  title: "Carbon Neutral",
                  description: "Achieved carbon neutrality across all operations"
                },
                {
                  year: "2022",
                  title: "Circular Program",
                  description: "Launched clothing recycling and upcycling initiatives"
                },
                {
                  year: "2023",
                  title: "Global Impact",
                  description: "Expanded sustainable practices to 50+ partner facilities"
                },
                {
                  year: "2024",
                  title: "Future Forward",
                  description: "Pioneering new eco-friendly materials and processes"
                }
              ].map((item, index) => (
                <div 
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'} fade-in-up`}
                       style={{ animationDelay: `${index * 0.2}s` }}>
                    <Card className="p-6 hover:shadow-lg smooth-transition">
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                  
                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our <span className="text-gradient">Mission</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Together, we can make fashion more sustainable, ethical, and beautiful. 
            Every purchase supports our commitment to positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 smooth-transition">
              Shop Sustainable Fashion
            </button>
            <button className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground smooth-transition">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;