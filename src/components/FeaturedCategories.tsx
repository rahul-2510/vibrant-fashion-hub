
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface Category {
  id: number;
  name: string;
  image: string;
  url: string;
  featured?: boolean;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Makeup",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    url: "#makeup",
    featured: true
  },
  {
    id: 2,
    name: "Skincare",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    url: "#skincare",
    featured: true
  },
  {
    id: 3,
    name: "Hair",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    url: "#hair",
    featured: true
  },
  {
    id: 4,
    name: "Fragrance",
    image: "https://images.unsplash.com/photo-1595425964072-5b87467b010d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    url: "#fragrance"
  },
  {
    id: 5,
    name: "Tools",
    image: "https://images.unsplash.com/photo-1631214550641-402c4b7e2fe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    url: "#tools"
  },
  {
    id: 6,
    name: "Men",
    image: "https://images.unsplash.com/photo-1581607796447-bf52bcbe8454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    url: "#men"
  }
];

export function FeaturedCategories() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  
  const featuredCategories = categories.filter(cat => cat.featured);
  const otherCategories = categories.filter(cat => !cat.featured);
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Browse Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Explore our carefully curated collections of products designed to help you look and feel your best.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={category.url}
              className="group relative rounded-xl overflow-hidden aspect-[4/5] hover-lift"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-black/70 via-transparent to-transparent z-10" />
              <img
                src={category.image}
                alt={category.name}
                className={cn(
                  "w-full h-full object-cover transition-transform duration-700",
                  hoveredCategory === category.id && "scale-110"
                )}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-white font-serif text-2xl font-medium mb-2">{category.name}</h3>
                <span className="inline-block text-white/80 text-sm group-hover:text-white transition-colors">
                  Explore Collection
                  <svg className="inline-block ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherCategories.map((category) => (
            <Link
              key={category.id}
              to={category.url}
              className="group relative rounded-lg overflow-hidden aspect-square hover-lift"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-black/70 via-transparent to-transparent z-10" />
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                <h3 className="text-white font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
