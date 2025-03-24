
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You've been added to our newsletter.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };
  
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto glass rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with our latest products, exclusive offers, and beauty tips.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-fashion-silver focus:border-fashion-sage focus:outline-none focus:ring-0"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="h-12 px-6 rounded-lg bg-fashion-charcoal text-white font-medium hover:bg-fashion-black transition-colors flex items-center justify-center"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
            
            <div className="hidden md:block">
              <div className="aspect-square rounded-full bg-fashion-sage/20 p-8 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1629019416996-712aa1bd6740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="Beauty products"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
