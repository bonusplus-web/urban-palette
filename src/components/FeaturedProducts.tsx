import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
}

const imageMap: Record<string, string> = {
  "product-hoodie.jpg": productHoodie,
  "product-jacket.jpg": productJacket,
  "product-sneakers.jpg": productSneakers,
  "product-tshirt.jpg": productTshirt,
};

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.map((p: Product) => ({ ...p, image: imageMap[p.image] }))
        )
      )
      .catch((err) => console.error("Failed to load products", err));
  }, []);

  const handleAddToCloset = (product: Product) => {
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
          {products.map((product, index) => (
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
