
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, CreditCard, ShieldCheck, Truck } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [checkoutStep, setCheckoutStep] = useState("shipping");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock cart data - would come from a cart context in a real app
  const cartItems = [
    { id: 1, name: "Radiant Glow Serum", price: 49.99, quantity: 1, image: "https://placehold.co/200x200" },
    { id: 2, name: "Hydrating Facial Cleanser", price: 24.99, quantity: 2, image: "https://placehold.co/200x200" }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Order placed!",
        description: "Your order has been successfully placed.",
      });
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 mt-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-3">Checkout</h1>
          
          {/* Checkout steps */}
          <div className="mb-8">
            <Tabs defaultValue={checkoutStep} onValueChange={setCheckoutStep}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="shipping" disabled={checkoutStep !== "shipping"}>Shipping</TabsTrigger>
                <TabsTrigger value="payment" disabled={checkoutStep !== "payment" && checkoutStep !== "shipping"}>Payment</TabsTrigger>
                <TabsTrigger value="review" disabled={checkoutStep !== "review" && checkoutStep !== "payment"}>Review</TabsTrigger>
              </TabsList>
              
              <TabsContent value="shipping" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-medium mb-4">Shipping Information</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
                          <Input id="firstName" placeholder="Jane" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                        <Input id="email" type="email" placeholder="jane@example.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                        <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                      </div>
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium mb-1">Address</label>
                        <Input id="address" placeholder="123 Main St" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium mb-1">City</label>
                          <Input id="city" placeholder="San Francisco" />
                        </div>
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium mb-1">State</label>
                          <Input id="state" placeholder="CA" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium mb-1">ZIP Code</label>
                          <Input id="zipCode" placeholder="94103" />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium mb-1">Country</label>
                          <Input id="country" placeholder="United States" />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="saveAddress" 
                          className="h-4 w-4 rounded border-gray-300 text-fashion-sage focus:ring-fashion-sage mr-2" 
                        />
                        <label htmlFor="saveAddress" className="text-sm">
                          Save this address for future orders
                        </label>
                      </div>
                      <div className="pt-4">
                        <Button onClick={() => setCheckoutStep("payment")} className="w-full">
                          Continue to Payment
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="w-16 h-16 overflow-hidden rounded-md">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Subtotal</span>
                            <span className="text-sm">${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Shipping</span>
                            <span className="text-sm">${shipping.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Tax</span>
                            <span className="text-sm">${tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <Truck className="text-fashion-sage h-5 w-5 mr-2" />
                        <span className="text-sm">Free shipping on orders over $50</span>
                      </div>
                      <div className="flex items-center">
                        <ShieldCheck className="text-fashion-sage h-5 w-5 mr-2" />
                        <span className="text-sm">Secure checkout process</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="payment" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-medium mb-4">Payment Method</h2>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4 relative">
                        <input 
                          type="radio" 
                          id="creditCard" 
                          name="paymentMethod" 
                          className="absolute h-5 w-5 top-4 left-4"
                          defaultChecked
                        />
                        <div className="ml-7">
                          <label htmlFor="creditCard" className="font-medium">Credit Card</label>
                          <div className="mt-4 space-y-3">
                            <div>
                              <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Card Number</label>
                              <Input id="cardNumber" placeholder="**** **** **** ****" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="expiryDate" className="block text-sm font-medium mb-1">Expiry Date</label>
                                <Input id="expiryDate" placeholder="MM/YY" />
                              </div>
                              <div>
                                <label htmlFor="cvv" className="block text-sm font-medium mb-1">CVV</label>
                                <Input id="cvv" placeholder="***" />
                              </div>
                            </div>
                            <div>
                              <label htmlFor="nameOnCard" className="block text-sm font-medium mb-1">Name on Card</label>
                              <Input id="nameOnCard" placeholder="Jane Doe" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border rounded-md p-4 relative">
                        <input 
                          type="radio" 
                          id="paypal" 
                          name="paymentMethod" 
                          className="absolute h-5 w-5 top-4 left-4"
                        />
                        <div className="ml-7">
                          <label htmlFor="paypal" className="font-medium">PayPal</label>
                          <p className="text-sm text-muted-foreground mt-1">
                            You will be redirected to PayPal to complete your purchase securely.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="savePayment" 
                          className="h-4 w-4 rounded border-gray-300 text-fashion-sage focus:ring-fashion-sage mr-2" 
                        />
                        <label htmlFor="savePayment" className="text-sm">
                          Save this payment method for future orders
                        </label>
                      </div>
                      
                      <div className="flex space-x-3 pt-4">
                        <Button variant="outline" onClick={() => setCheckoutStep("shipping")}>
                          Back to Shipping
                        </Button>
                        <Button onClick={() => setCheckoutStep("review")} className="flex-1">
                          Review Order
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="w-16 h-16 overflow-hidden rounded-md">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Subtotal</span>
                            <span className="text-sm">${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Shipping</span>
                            <span className="text-sm">${shipping.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Tax</span>
                            <span className="text-sm">${tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="review" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-xl font-medium mb-4">Review Order</h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium">Shipping Information</h3>
                          <button 
                            onClick={() => setCheckoutStep("shipping")}
                            className="text-sm text-fashion-sage"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4">
                          <p className="text-sm">Jane Doe</p>
                          <p className="text-sm">123 Main St</p>
                          <p className="text-sm">San Francisco, CA 94103</p>
                          <p className="text-sm">United States</p>
                          <p className="text-sm mt-2">jane@example.com</p>
                          <p className="text-sm">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <h3 className="font-medium">Payment Method</h3>
                          <button 
                            onClick={() => setCheckoutStep("payment")}
                            className="text-sm text-fashion-sage"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-4 flex items-center">
                          <CreditCard className="mr-3 text-fashion-sage" />
                          <div>
                            <p className="text-sm font-medium">Credit Card</p>
                            <p className="text-sm">Ending in ****4242</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          onClick={handlePlaceOrder} 
                          className="w-full"
                          disabled={isProcessing}
                        >
                          {isProcessing ? "Processing..." : "Place Order"}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground mt-3">
                          By placing your order, you agree to our <Link to="/terms" className="text-fashion-sage">Terms of Service</Link> and <Link to="/privacy" className="text-fashion-sage">Privacy Policy</Link>.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                    <div className="bg-muted/30 rounded-lg p-4">
                      <div className="space-y-4">
                        {cartItems.map((item) => (
                          <div key={item.id} className="flex items-center space-x-4">
                            <div className="w-16 h-16 overflow-hidden rounded-md">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                          </div>
                        ))}
                        
                        <div className="border-t pt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm">Subtotal</span>
                            <span className="text-sm">${subtotal.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Shipping</span>
                            <span className="text-sm">${shipping.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm">Tax</span>
                            <span className="text-sm">${tax.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between font-medium pt-2 border-t">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex items-start">
                        <Truck className="text-fashion-sage h-5 w-5 mr-2 mt-0.5" />
                        <div>
                          <span className="text-sm font-medium block">Standard Shipping</span>
                          <span className="text-sm text-muted-foreground">Estimated delivery: 3-5 business days</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <ShieldCheck className="text-fashion-sage h-5 w-5 mr-2" />
                        <span className="text-sm">Your payment information is secure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
