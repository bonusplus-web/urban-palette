import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";

const featuredProducts = [
  {
    id: "1",
    name: "Urban Oversized Hoodie",
    price: 89,
    image: productHoodie,
    category: "Hoodies",
    colors: ["#8B7355", "#2C2C2C", "#F5F5DC"]
  },
  {
    id: "2",
    name: "Contemporary Denim Jacket",
    price: 129,
    image: productJacket,
    category: "Jackets",
    colors: ["#4A5568", "#2D3748", "#E2E8F0"]
  },
  {
    id: "3",
    name: "Minimalist Sneakers",
    price: 159,
    image: productSneakers,
    category: "Footwear",
    colors: ["#FFFFFF", "#000000", "#A0A0A0"]
  },
  {
    id: "4",
    name: "Essential Tee",
    price: 45,
    image: productTshirt,
    category: "T-Shirts",
    colors: ["#F7FAFC", "#2D3748", "#8B7355"]
  }
];

const FeaturedProducts = () => {
  const handleAddToCloset = (product: any) => {
    console.log("Added to closet:", product);
    // Will implement virtual closet functionality
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured</span> Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that define contemporary urban style. Each item is crafted 
            with premium materials and attention to detail.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard 
                product={product} 
                onAddToCloset={handleAddToCloset}
              />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg smooth-transition"
          >
            View All Products
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 smooth-transition" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;