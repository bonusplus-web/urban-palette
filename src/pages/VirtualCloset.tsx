import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, Save, Shuffle, Sparkles, ShoppingBag } from "lucide-react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import productSneakers from "@/assets/product-sneakers.jpg";
import productTshirt from "@/assets/product-tshirt.jpg";

const availableItems = [
  { id: "1", name: "Urban Hoodie", image: productHoodie, category: "tops" },
  { id: "2", name: "Denim Jacket", image: productJacket, category: "outerwear" },
  { id: "3", name: "Essential Tee", image: productTshirt, category: "tops" },
  { id: "4", name: "Minimalist Sneakers", image: productSneakers, category: "footwear" },
];

const VirtualCloset = () => {
  const [selectedOutfit, setSelectedOutfit] = useState({
    tops: null,
    outerwear: null,
    footwear: null
  });
  
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e: any, item: any) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (e: any, category: string) => {
    e.preventDefault();
    if (draggedItem && draggedItem.category === category) {
      setSelectedOutfit(prev => ({
        ...prev,
        [category]: draggedItem
      }));
    }
    setDraggedItem(null);
  };

  const removeFromOutfit = (category: string) => {
    setSelectedOutfit(prev => ({
      ...prev,
      [category]: null
    }));
  };

  const generateRandomOutfit = () => {
    const tops = availableItems.filter(item => item.category === "tops");
    const outerwear = availableItems.filter(item => item.category === "outerwear");
    const footwear = availableItems.filter(item => item.category === "footwear");

    setSelectedOutfit({
      tops: tops[Math.floor(Math.random() * tops.length)],
      outerwear: outerwear[Math.floor(Math.random() * outerwear.length)],
      footwear: footwear[Math.floor(Math.random() * footwear.length)]
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 hero-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-accent animate-gentle-bounce" />
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-gradient">Virtual</span> Closet
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mix, match, and create your perfect outfit. Drag items to your virtual closet and get AI-powered styling suggestions.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Items */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Available Items</h3>
              <div className="space-y-4">
                {availableItems.map((item) => (
                  <div
                    key={item.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                    className="flex items-center space-x-3 p-3 bg-secondary rounded-lg cursor-move hover:bg-accent smooth-transition"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <span className="text-sm font-medium text-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Virtual Closet */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">Your Outfit</h3>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={generateRandomOutfit}
                    className="hover:bg-accent"
                  >
                    <Shuffle className="w-4 h-4 mr-2" />
                    Random
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Save Outfit
                  </Button>
                </div>
              </div>

              {/* Outfit Categories */}
              <div className="grid md:grid-cols-3 gap-6">
                {/* Outerwear */}
                <div
                  className="border-2 border-dashed border-border rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center smooth-transition hover:border-primary"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "outerwear")}
                >
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Outerwear</h4>
                  {selectedOutfit.outerwear ? (
                    <div className="relative group">
                      <img
                        src={selectedOutfit.outerwear.image}
                        alt={selectedOutfit.outerwear.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute -top-2 -right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 smooth-transition"
                        onClick={() => removeFromOutfit("outerwear")}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                      <p className="text-xs text-center mt-2">{selectedOutfit.outerwear.name}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center">Drag outerwear here</p>
                  )}
                </div>

                {/* Tops */}
                <div
                  className="border-2 border-dashed border-border rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center smooth-transition hover:border-primary"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "tops")}
                >
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Tops</h4>
                  {selectedOutfit.tops ? (
                    <div className="relative group">
                      <img
                        src={selectedOutfit.tops.image}
                        alt={selectedOutfit.tops.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute -top-2 -right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 smooth-transition"
                        onClick={() => removeFromOutfit("tops")}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                      <p className="text-xs text-center mt-2">{selectedOutfit.tops.name}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center">Drag tops here</p>
                  )}
                </div>

                {/* Footwear */}
                <div
                  className="border-2 border-dashed border-border rounded-lg p-6 min-h-[200px] flex flex-col items-center justify-center smooth-transition hover:border-primary"
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, "footwear")}
                >
                  <h4 className="text-sm font-medium text-muted-foreground mb-4">Footwear</h4>
                  {selectedOutfit.footwear ? (
                    <div className="relative group">
                      <img
                        src={selectedOutfit.footwear.image}
                        alt={selectedOutfit.footwear.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute -top-2 -right-2 w-6 h-6 p-0 opacity-0 group-hover:opacity-100 smooth-transition"
                        onClick={() => removeFromOutfit("footwear")}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                      <p className="text-xs text-center mt-2">{selectedOutfit.footwear.name}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground text-center">Drag footwear here</p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center space-x-4 mt-8">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Purchase Outfit
                </Button>
                <Button variant="outline" className="hover:bg-accent">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Get AI Suggestions
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualCloset;