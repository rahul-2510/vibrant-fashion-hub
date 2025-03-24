
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Product, mockedProducts } from "@/data/products";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const { toast } = useToast();

  // Simulate loading wishlist items
  useEffect(() => {
    // For demo purposes, use first 4 mocked products
    setWishlistItems(mockedProducts.slice(0, 4));
  }, []);

  const removeFromWishlist = (productId: number) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast({
      title: "Item removed",
      description: "The item has been removed from your wishlist.",
    });
  };

  const addToCart = (product: Product) => {
    toast({
      title: "Added to your bag",
      description: `${product.name} has been added to your shopping bag.`,
    });
  };

  const clearWishlist = () => {
    setWishlistItems([]);
    toast({
      title: "Wishlist cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-2xl md:text-3xl font-bold">My Wishlist</h1>
            {wishlistItems.length > 0 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearWishlist}
              >
                <Trash2 size={14} className="mr-1" /> Clear All
              </Button>
            )}
          </div>

          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {wishlistItems.map((item) => (
                  <div key={item.id} className="border border-border rounded-lg p-4 sm:p-6">
                    <div className="grid grid-cols-4 gap-4 sm:gap-6">
                      <div className="col-span-1">
                        <Link to={`/product/${item.id}`} className="block aspect-square rounded-md overflow-hidden">
                          <img 
                            src={item.images[0]} 
                            alt={item.name} 
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </Link>
                      </div>
                      <div className="col-span-3">
                        <div className="flex flex-col h-full justify-between">
                          <div>
                            <Link to={`/product/${item.id}`} className="hover:text-fashion-sage transition-colors">
                              <h2 className="font-medium text-lg mb-1">{item.name}</h2>
                            </Link>
                            <p className="text-sm text-muted-foreground mb-2">{item.brand}</p>
                            <div className="flex items-center mb-4">
                              <span className="font-medium mr-3">${item.price.toFixed(2)}</span>
                              {item.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${item.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Button 
                              size="sm" 
                              className="bg-fashion-charcoal hover:bg-fashion-black text-white"
                              onClick={() => addToCart(item)}
                            >
                              <ShoppingBag size={14} className="mr-1" /> Add to Bag
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline" 
                              onClick={() => removeFromWishlist(item.id)}
                            >
                              <Trash2 size={14} className="mr-1" /> Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <Heart size={24} />
              </div>
              <h2 className="text-xl font-medium mb-2">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Add items to your wishlist by clicking the heart icon on products you love.
              </p>
              <Button asChild>
                <Link to="/products">
                  Start Shopping
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
