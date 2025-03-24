import { useState } from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { ButtonWithIcon } from "./ui/button-with-icon";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  ratingCount: number;
  images: string[];
  isBestseller?: boolean;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const discount = product.originalPrice ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };
  
  return (
    <div 
      className="product-card group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        {/* Product badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
          {product.isBestseller && (
            <span className="px-2 py-1 bg-fashion-charcoal text-white text-xs rounded">Bestseller</span>
          )}
          {product.isNew && (
            <span className="px-2 py-1 bg-fashion-sage text-fashion-charcoal text-xs rounded">New</span>
          )}
          {product.isSale && (
            <span className="px-2 py-1 bg-fashion-rose text-fashion-charcoal text-xs rounded">Sale</span>
          )}
        </div>
        
        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-2 right-2 z-10 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-full transition-all hover:bg-white"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            size={16}
            className={`transition-colors ${isWishlisted ? "fill-fashion-rose text-fashion-rose" : "text-fashion-charcoal"}`}
          />
        </button>
        
        {/* Product image */}
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700"
        />
        
        {/* Quick add to cart overlay */}
        <div className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-fashion-charcoal/80 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <ButtonWithIcon
            variant="primary"
            className="w-full bg-white text-fashion-charcoal hover:bg-fashion-silver"
            icon={<ShoppingBag size={16} />}
          >
            Quick Add
          </ButtonWithIcon>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <p className="text-sm text-muted-foreground font-medium">{product.brand}</p>
          <div className="flex items-center">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-xs ml-1">{product.rating} ({product.ratingCount})</span>
          </div>
        </div>
        
        <h3 className="font-medium mb-2 line-clamp-2 min-h-[48px]">{product.name}</h3>
        
        <div className="flex items-center">
          <span className="price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <>
              <span className="price-discount ml-2">${product.originalPrice.toFixed(2)}</span>
              <span className="text-fashion-sage text-sm ml-2">-{discount}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

