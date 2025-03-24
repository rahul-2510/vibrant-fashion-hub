
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard, Product } from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { mockedProducts } from "@/data/products";

const ProductListing = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState("featured");

  // Simulate fetching products
  useEffect(() => {
    setProducts(mockedProducts);
  }, []);

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => 
      (priceRange[0] <= product.price && product.price <= priceRange[1]) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      (selectedCategories.length === 0 || selectedCategories.includes("category")) // Replace with actual category data
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  const brands = Array.from(new Set(products.map(product => product.brand)));

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prevBrands => 
      prevBrands.includes(brand) 
        ? prevBrands.filter(b => b !== brand) 
        : [...prevBrands, brand]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([0, 200]);
    setSelectedBrands([]);
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero banner */}
        <div className="bg-fashion-sage/10 py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4">Beauty Products</h1>
            <p className="text-muted-foreground max-w-2xl">
              Discover our curated collection of premium beauty products. From skincare essentials to makeup must-haves, 
              find everything you need for your beauty routine.
            </p>
          </div>
        </div>

        {/* Product grid with filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile filter button */}
            <div className="lg:hidden mb-4">
              <Button 
                variant="outline" 
                onClick={() => setFiltersVisible(!filtersVisible)}
                className="w-full flex items-center justify-center"
              >
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                {filtersVisible ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            {/* Filters sidebar */}
            <div className={`${filtersVisible ? 'block' : 'hidden'} lg:block lg:w-1/4 space-y-8`}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium text-lg">Filters</h2>
                <button 
                  className="text-sm text-fashion-sage hover:text-fashion-charcoal"
                  onClick={clearAllFilters}
                >
                  Clear All
                </button>
              </div>

              {/* Price Range Filter */}
              <div className="border-b pb-6">
                <h3 className="font-medium mb-4">Price Range</h3>
                <Slider 
                  defaultValue={priceRange} 
                  max={200} 
                  step={1} 
                  onValueChange={setPriceRange} 
                />
                <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Brand Filter */}
              <div className="border-b pb-6">
                <h3 className="font-medium mb-4">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                        className="mr-2"
                      />
                      <label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="pb-6">
                <h3 className="font-medium mb-4">Category</h3>
                <div className="space-y-2">
                  {['Skincare', 'Makeup', 'Haircare', 'Fragrance', 'Bath & Body'].map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox 
                        id={`category-${category}`} 
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => {
                          setSelectedCategories(prev => 
                            prev.includes(category) 
                              ? prev.filter(c => c !== category) 
                              : [...prev, category]
                          );
                        }}
                        className="mr-2"
                      />
                      <label htmlFor={`category-${category}`} className="text-sm cursor-pointer">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="lg:w-3/4">
              {/* Sorting and results count */}
              <div className="flex flex-wrap justify-between items-center mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-medium">{filteredProducts.length}</span> results
                </p>
                <div className="relative">
                  <select
                    className="appearance-none bg-background border border-input rounded-md py-2 pl-3 pr-10 text-sm"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 pointer-events-none" />
                </div>
              </div>

              {/* Product grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Show more button */}
              {filteredProducts.length > 0 && (
                <div className="mt-12 text-center">
                  <Button variant="outline" className="px-8">
                    Load More
                  </Button>
                </div>
              )}

              {/* No results */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to find what you're looking for.
                  </p>
                  <Button variant="outline" onClick={clearAllFilters}>
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductListing;
