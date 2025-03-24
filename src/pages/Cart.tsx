
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingBag, Trash2, Minus, Plus, CreditCard, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Product, mockedProducts } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const { toast } = useToast();

  // Simulate loading cart items
  useEffect(() => {
    // For demo purposes, use first 2 mocked products with quantities
    setCartItems(
      mockedProducts.slice(0, 2).map(product => ({
        ...product,
        quantity: Math.floor(Math.random() * 2) + 1
      }))
    );
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your shopping bag.",
    });
  };

  const clearCart = () => {
    setCartItems([]);
    toast({
      title: "Shopping bag cleared",
      description: "All items have been removed from your shopping bag.",
    });
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "welcome10") {
      setIsPromoApplied(true);
      toast({
        title: "Promo code applied",
        description: "10% discount has been applied to your order.",
      });
    } else {
      toast({
        title: "Invalid promo code",
        description: "Please enter a valid promo code.",
        variant: "destructive",
      });
    }
  };

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = isPromoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="font-serif text-2xl md:text-3xl font-bold">Shopping Bag</h1>
            {cartItems.length > 0 && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={clearCart}
              >
                <Trash2 size={14} className="mr-1" /> Clear All
              </Button>
            )}
          </div>

          {cartItems.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {/* Cart items */}
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="border border-border rounded-lg p-4 sm:p-6">
                      <div className="grid grid-cols-4 gap-4">
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
                          <div className="flex flex-col h-full">
                            <div className="flex-grow">
                              <Link to={`/product/${item.id}`} className="hover:text-fashion-sage transition-colors">
                                <h2 className="font-medium text-lg mb-1">{item.name}</h2>
                              </Link>
                              <p className="text-sm text-muted-foreground mb-4">{item.brand}</p>
                              <div className="flex justify-between mb-4">
                                <div className="flex items-center">
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-8 h-8 flex items-center justify-center border border-input rounded-l-md"
                                  >
                                    <Minus size={14} />
                                  </button>
                                  <span className="w-10 h-8 flex items-center justify-center border-t border-b border-input">
                                    {item.quantity}
                                  </span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-8 h-8 flex items-center justify-center border border-input rounded-r-md"
                                  >
                                    <Plus size={14} />
                                  </button>
                                </div>
                                <div>
                                  <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                            <div className="pt-4 border-t border-border">
                              <button 
                                className="text-sm text-fashion-sage hover:text-fashion-charcoal flex items-center"
                                onClick={() => removeItem(item.id)}
                              >
                                <Trash2 size={14} className="mr-1" /> Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order summary */}
              <div className="md:col-span-1">
                <div className="border border-border rounded-lg p-6 sticky top-8">
                  <h2 className="font-medium text-lg mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    {isPromoApplied && (
                      <div className="flex justify-between text-fashion-sage">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="pt-3 mt-3 border-t border-border flex justify-between font-medium text-base">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Promo code */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Promo Code</label>
                    <div className="flex gap-2">
                      <Input 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Enter code"
                        disabled={isPromoApplied}
                      />
                      <Button 
                        variant="outline" 
                        onClick={applyPromoCode}
                        disabled={isPromoApplied || !promoCode}
                      >
                        Apply
                      </Button>
                    </div>
                    {isPromoApplied && (
                      <p className="text-xs text-fashion-sage mt-1">Promo code "WELCOME10" applied!</p>
                    )}
                  </div>

                  {/* Checkout button */}
                  <Button 
                    className="w-full mt-6 bg-fashion-charcoal hover:bg-fashion-black text-white"
                  >
                    <CreditCard size={16} className="mr-2" /> Checkout
                  </Button>

                  {/* Continue shopping */}
                  <div className="mt-4 text-center">
                    <Link 
                      to="/products" 
                      className="text-sm text-fashion-sage hover:text-fashion-charcoal inline-flex items-center"
                    >
                      Continue Shopping <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <ShoppingBag size={24} />
              </div>
              <h2 className="text-xl font-medium mb-2">Your shopping bag is empty</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Looks like you haven't added any products to your bag yet.
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

export default Cart;
