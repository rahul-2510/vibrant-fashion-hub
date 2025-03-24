
import { useState } from "react";
import { ProductCard, Product } from "./ProductCard";
import { ButtonWithIcon } from "./ui/button-with-icon";
import { ChevronRight } from "lucide-react";

const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Serum with Hyaluronic Acid",
    brand: "Crystal Glow",
    price: 38.99,
    originalPrice: 49.99,
    rating: 4.8,
    ratingCount: 256,
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1608248544142-2a7a4f49d7c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    isBestseller: true
  },
  {
    id: 2,
    name: "Matte Lipstick Collection - Limited Edition",
    brand: "Lush Beauty",
    price: 24.99,
    rating: 4.5,
    ratingCount: 187,
    images: [
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    isNew: true
  },
  {
    id: 3,
    name: "Daily Defense Moisturizer with SPF 30",
    brand: "Pure Elements",
    price: 28.50,
    originalPrice: 35.99,
    rating: 4.7,
    ratingCount: 342,
    images: [
      "https://images.unsplash.com/photo-1611080541424-6ae9910a5b6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    isSale: true
  },
  {
    id: 4,
    name: "Precision Eyeliner Pen - Waterproof",
    brand: "Lush Beauty",
    price: 18.99,
    rating: 4.6,
    ratingCount: 129,
    images: [
      "https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620804587331-effc68d47d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 5,
    name: "Revitalizing Night Cream with Retinol",
    brand: "Crystal Glow",
    price: 45.99,
    originalPrice: 59.99,
    rating: 4.9,
    ratingCount: 215,
    images: [
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1599946347306-613241949506?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    isBestseller: true,
    isSale: true
  },
  {
    id: 6,
    name: "Volumizing Mascara - Long-lasting Formula",
    brand: "Lush Beauty",
    price: 22.50,
    rating: 4.4,
    ratingCount: 178,
    images: [
      "https://images.unsplash.com/photo-1591348280039-96b1d7673446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591348281215-4c9672482180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 7,
    name: "Exfoliating Facial Scrub with Natural Extracts",
    brand: "Pure Elements",
    price: 32.99,
    rating: 4.7,
    ratingCount: 164,
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1601049540684-8a75c7e4338c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    isNew: true
  },
  {
    id: 8,
    name: "Luxury Perfume - Amber & Vanilla Notes",
    brand: "Essence",
    price: 89.99,
    originalPrice: 120.00,
    rating: 4.9,
    ratingCount: 98,
    images: [
      "https://images.unsplash.com/photo-1608528577891-eb055944d2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    ],
    isSale: true
  }
];

const categories = ["All", "Bestsellers", "New Arrivals", "On Sale"];

export function TrendingProducts() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProducts = products.filter(product => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Bestsellers" && product.isBestseller) return true;
    if (activeCategory === "New Arrivals" && product.isNew) return true;
    if (activeCategory === "On Sale" && product.isSale) return true;
    return false;
  });
  
  return (
    <section className="py-16 px-4 bg-fashion-ivory/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Trending Now</h2>
            <p className="text-muted-foreground max-w-2xl">Discover our most popular products loved by our customers.</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <ButtonWithIcon 
              variant="ghost" 
              className="text-fashion-charcoal hover:text-fashion-sage hover:bg-transparent"
              icon={<ChevronRight size={16} />} 
              iconPosition="right"
            >
              View All Products
            </ButtonWithIcon>
          </div>
        </div>
        
        <div className="flex overflow-x-auto pb-2 mb-6 scrollbar-none">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-fashion-charcoal text-white"
                    : "bg-muted hover:bg-fashion-silver/50 text-fashion-charcoal"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
