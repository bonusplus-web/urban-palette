import { createServer } from "http";

const products = [
  {
    id: "1",
    name: "Urban Oversized Hoodie",
    price: 89,
    image: "product-hoodie.jpg",
    category: "Hoodies",
    colors: ["#8B7355", "#2C2C2C", "#F5F5DC"],
  },
  {
    id: "2",
    name: "Contemporary Denim Jacket",
    price: 129,
    image: "product-jacket.jpg",
    category: "Jackets",
    colors: ["#4A5568", "#2D3748", "#E2E8F0"],
  },
  {
    id: "3",
    name: "Minimalist Sneakers",
    price: 159,
    image: "product-sneakers.jpg",
    category: "Footwear",
    colors: ["#FFFFFF", "#000000", "#A0A0A0"],
  },
  {
    id: "4",
    name: "Essential Tee",
    price: 45,
    image: "product-tshirt.jpg",
    category: "T-Shirts",
    colors: ["#F7FAFC", "#2D3748", "#8B7355"],
  },
];

const server = createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/products") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.end(JSON.stringify(products));
    return;
  }

  res.statusCode = 404;
  res.end("Not found");
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

