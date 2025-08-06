import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  colors: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToCloset?: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCloset }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div 
      className="product-card bg-card rounded-lg overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
        />
        
        {/* Overlay Actions */}
        <div className={`absolute inset-0 bg-background/20 backdrop-blur-sm flex items-center justify-center gap-2 smooth-transition ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm">
            <Eye className="w-4 h-4" />
          </Button>
          <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
          </Button>
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground"
            onClick={() => onAddToCloset?.(product)}
          >
            <ShoppingBag className="w-4 h-4 mr-1" />
            Add to Closet
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary smooth-transition">
          {product.name}
        </h3>
        
        <p className="text-2xl font-bold text-primary mb-3">
          ${product.price}
        </p>

        {/* Color Options */}
        <div className="flex items-center space-x-2 mb-4">
          <span className="text-sm text-muted-foreground">Colors:</span>
          <div className="flex space-x-1">
            {product.colors.map((color, index) => (
              <button
                key={index}
                className={`w-6 h-6 rounded-full border-2 smooth-transition ${
                  selectedColor === color ? 'border-primary' : 'border-border'
                }`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              />
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground smooth-transition"
          onClick={() => onAddToCloset?.(product)}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;