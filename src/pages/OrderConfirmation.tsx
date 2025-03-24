
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package, Printer, ShoppingBag } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  // Redirect if page is accessed directly (in a real app, would check for order data)
  useEffect(() => {
    // For demo purposes, we're not redirecting, but in a real app:
    // if (!orderData) navigate('/cart');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 mt-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-fashion-sage/20 mb-6">
            <CheckCircle2 size={32} className="text-fashion-sage" />
          </div>
          
          <h1 className="font-serif text-2xl md:text-3xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-left">
                <h3 className="text-sm text-muted-foreground">Order Number</h3>
                <p className="font-medium">#{orderNumber}</p>
              </div>
              <div className="text-left">
                <h3 className="text-sm text-muted-foreground">Order Date</h3>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="text-left">
                <h3 className="text-sm text-muted-foreground">Total</h3>
                <p className="font-medium">$99.97</p>
              </div>
              <div className="text-left">
                <h3 className="text-sm text-muted-foreground">Payment Method</h3>
                <p className="font-medium">Credit Card (****4242)</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 pt-4 border-t">
              <Button variant="outline" size="sm" className="flex items-center">
                <Printer size={16} className="mr-1" />
                Print Receipt
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Package size={16} className="mr-1" />
                Track Order
              </Button>
            </div>
          </div>
          
          <div className="text-left mb-8">
            <h2 className="font-medium text-lg mb-4">Shipping Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Shipping Address</h3>
                <p className="text-sm">Jane Doe</p>
                <p className="text-sm">123 Main St</p>
                <p className="text-sm">San Francisco, CA 94103</p>
                <p className="text-sm">United States</p>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Shipping Method</h3>
                <p className="text-sm">Standard Shipping</p>
                <p className="text-sm">Estimated delivery: 3-5 business days</p>
                <p className="text-sm mt-4">You'll receive an email when your order ships.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center flex-wrap gap-4">
            <Button asChild>
              <Link to="/products">
                <ShoppingBag size={16} className="mr-2" />
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/dashboard">
                View Account
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
