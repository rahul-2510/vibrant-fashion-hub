
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, Share2, Star, ShoppingBag, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { mockedProducts } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Find product based on ID from URL
  const product = mockedProducts.find(p => p.id.toString() === id) || mockedProducts[0];

  const handleAddToCart = () => {
    toast({
      title: "Added to your bag",
      description: `${product.name} (Qty: ${quantity}) has been added to your shopping bag.`,
    });
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted 
        ? `${product.name} has been removed from your wishlist.`
        : `${product.name} has been added to your wishlist.`,
    });
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square rounded-lg overflow-hidden mb-4">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${
                    index === currentImageIndex ? 'border-fashion-sage' : 'border-transparent'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-2xl md:text-3xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground mt-1">{product.brand}</p>
            </div>

            {/* Ratings */}
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.round(product.rating) ? "text-yellow-500 fill-yellow-500" : "text-muted"} />
                ))}
              </div>
              <span className="ml-2 text-sm">{product.rating} ({product.ratingCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 pt-2">
              <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="px-2 py-1 bg-fashion-rose/20 text-fashion-rose text-sm font-medium rounded">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Quantity selector */}
            <div className="pt-4">
              <p className="font-medium mb-2">Quantity</p>
              <div className="flex items-center">
                <button 
                  onClick={decrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-input rounded-l-md focus:outline-none"
                >
                  <Minus size={16} />
                </button>
                <div className="w-14 h-10 flex items-center justify-center border-t border-b border-input">
                  {quantity}
                </div>
                <button 
                  onClick={incrementQuantity}
                  className="w-10 h-10 flex items-center justify-center border border-input rounded-r-md focus:outline-none"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to cart & wishlist buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-4">
              <Button 
                className="sm:col-span-4 bg-fashion-charcoal hover:bg-fashion-black text-white"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-4 w-4" /> Add to Bag
              </Button>
              <Button 
                variant="outline" 
                className="sm:col-span-1"
                onClick={handleAddToWishlist}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-fashion-rose text-fashion-rose" : ""}`} />
              </Button>
            </div>

            {/* Delivery & Returns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-md">
                <Truck className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">Free Shipping</span>
                <span className="text-xs text-muted-foreground">On orders over $50</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-md">
                <RotateCcw className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">Free Returns</span>
                <span className="text-xs text-muted-foreground">Within 30 days</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 border border-border rounded-md">
                <ShieldCheck className="h-5 w-5 mb-2" />
                <span className="text-sm font-medium">Secure Checkout</span>
                <span className="text-xs text-muted-foreground">Encrypted payment</span>
              </div>
            </div>

            {/* Description */}
            <div className="pt-6">
              <h2 className="font-medium text-lg mb-2">Product Description</h2>
              <p className="text-muted-foreground">
                Experience the luxury of our premium beauty product. Carefully formulated with the finest ingredients to 
                enhance your natural beauty and provide exceptional results. This product is cruelty-free, vegan-friendly, 
                and does not contain parabens, sulfates, or synthetic fragrances.
              </p>
            </div>

            {/* Share */}
            <div className="flex items-center space-x-4 pt-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground">
                <Share2 className="mr-1 h-4 w-4" /> Share
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full border-b justify-start">
              <TabsTrigger value="details" className="text-sm">Details</TabsTrigger>
              <TabsTrigger value="ingredients" className="text-sm">Ingredients</TabsTrigger>
              <TabsTrigger value="how-to-use" className="text-sm">How to Use</TabsTrigger>
              <TabsTrigger value="reviews" className="text-sm">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-6">
              <div className="space-y-4">
                <h3 className="font-medium">Product Details</h3>
                <p>
                  Our innovative formula combines scientific research with natural ingredients to deliver outstanding results. 
                  This product addresses multiple skin concerns simultaneously, providing comprehensive care for your beauty needs.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Deeply hydrates and nourishes</li>
                  <li>Improves skin texture and tone</li>
                  <li>Reduces the appearance of fine lines</li>
                  <li>Protects against environmental stressors</li>
                  <li>Suitable for all skin types</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="py-6">
              <div className="space-y-4">
                <h3 className="font-medium">Ingredients</h3>
                <p className="text-muted-foreground">
                  Aqua, Glycerin, Butylene Glycol, Niacinamide, Sodium Hyaluronate, Panthenol, Tocopheryl Acetate, 
                  Allantoin, Sodium PCA, Xanthan Gum, Carbomer, Ethylhexylglycerin, Disodium EDTA, Phenoxyethanol.
                </p>
                <p>
                  <span className="font-medium">Key Ingredients:</span>
                </p>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li><span className="font-medium">Niacinamide:</span> Improves skin texture and tone</li>
                  <li><span className="font-medium">Hyaluronic Acid:</span> Deeply hydrates the skin</li>
                  <li><span className="font-medium">Vitamin E:</span> Antioxidant protection</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="how-to-use" className="py-6">
              <div className="space-y-4">
                <h3 className="font-medium">How to Use</h3>
                <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
                  <li>Cleanse your face with your favorite gentle cleanser</li>
                  <li>Apply toner if it's part of your routine</li>
                  <li>Take a small amount of the product</li>
                  <li>Gently apply to face and neck using upward, circular motions</li>
                  <li>Allow to absorb fully before applying other products</li>
                  <li>For best results, use morning and evening</li>
                </ol>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="py-6">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">Customer Reviews</h3>
                  <Button variant="outline" size="sm">Write a Review</Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h4 className="font-medium">Sarah J.</h4>
                          <p className="text-xs text-muted-foreground">Verified Buyer</p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} size={14} className={j < 5 ? "text-yellow-500 fill-yellow-500" : "text-muted"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mb-2">Absolutely love this product! It has transformed my skin in just a few weeks.</p>
                      <p className="text-xs text-muted-foreground">Posted 2 weeks ago</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Button variant="outline">Load More Reviews</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
