import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search, Grid, List } from "lucide-react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";

const allProducts = [
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
  },
  // Duplicate products for demo
  {
    id: "5",
    name: "Urban Oversized Hoodie",
    price: 89,
    image: productHoodie,
    category: "Hoodies",
    colors: ["#8B7355", "#2C2C2C", "#F5F5DC"]
  },
  {
    id: "6",
    name: "Contemporary Denim Jacket",
    price: 129,
    image: productJacket,
    category: "Jackets",
    colors: ["#4A5568", "#2D3748", "#E2E8F0"]
  }
];

const categories = ["All", "Hoodies", "Jackets", "T-Shirts", "Footwear"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCloset = (product: any) => {
    console.log("Added to closet:", product);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Shop</span> Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of contemporary urban fashion
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="smooth-transition"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProducts.length} products
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product, index) => (
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
        </div>
      </section>
    </div>
  );
};

export default Shop;