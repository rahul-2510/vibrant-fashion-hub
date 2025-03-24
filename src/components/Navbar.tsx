
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, Heart, ChevronDown, User } from 'lucide-react';
import { ButtonWithIcon } from './ui/button-with-icon';
import { cn } from '@/lib/utils';

const categories = [
  { name: "Makeup", link: "/products?category=makeup" },
  { name: "Skincare", link: "/products?category=skincare" },
  { name: "Hair", link: "/products?category=hair" },
  { name: "Fragrance", link: "/products?category=fragrance" },
  { name: "Tools", link: "/products?category=tools" },
  { name: "Men", link: "/products?category=men" },
  { name: "Luxury", link: "/products?category=luxury" },
  { name: "Sale", link: "/products?category=sale", highlight: true }
];

export function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3 border-b border-gray-100">
          <Link to="/" className="relative">
            <h1 className="font-serif text-2xl font-bold tracking-tight">Quality<span className="text-fashion-sage">Fashion</span></h1>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-sm font-medium">
                <User size={18} className="mr-1" />
                <span className="mr-1">Account</span>
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 glass border border-fashion-silver/20">
                <div className="py-2 px-4">
                  <Link to="/login" className="block py-2 text-sm hover:text-fashion-sage transition-colors">Sign In</Link>
                  <Link to="/register" className="block py-2 text-sm hover:text-fashion-sage transition-colors">Register</Link>
                  <Link to="/dashboard" className="block py-2 text-sm hover:text-fashion-sage transition-colors">Dashboard</Link>
                  <Link to="/dashboard?tab=orders" className="block py-2 text-sm hover:text-fashion-sage transition-colors">Orders</Link>
                </div>
              </div>
            </div>
            
            <Link to="/wishlist" className="flex items-center text-sm font-medium">
              <Heart size={18} className="mr-1" />
              <span>Wishlist</span>
            </Link>
            
            <Link to="/cart" className="relative flex items-center text-sm font-medium">
              <ShoppingBag size={18} className="mr-1" />
              <span>Bag</span>
              <span className="absolute -top-2 -right-2 bg-fashion-sage text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>
          
          <div className="flex md:hidden items-center space-x-4">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/cart" className="relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-fashion-sage text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="hidden md:flex items-center justify-between py-3">
          <ul className="flex items-center space-x-8">
            {categories.map((category) => (
              <li key={category.name}>
                <Link 
                  to={category.link} 
                  className={cn(
                    "text-sm font-medium hover:text-fashion-sage transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-fashion-sage after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left",
                    category.highlight && "text-fashion-rose"
                  )}
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="relative group">
            <form onSubmit={handleSearch}>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-muted-foreground" />
              </div>
              <input 
                type="search" 
                placeholder="Search products..." 
                className="w-64 h-9 pl-10 pr-4 rounded-full bg-muted/50 border border-transparent focus:border-fashion-sage focus:outline-none focus:ring-0 text-sm transition-all" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 bg-white z-50 transition-transform duration-300 transform md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <h1 className="font-serif text-xl font-bold">Quality Fashion</h1>
          <button onClick={() => setMobileMenuOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4">
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-muted-foreground" />
              </div>
              <input 
                type="search" 
                placeholder="Search products..." 
                className="w-full h-10 pl-10 pr-4 rounded-md bg-muted/50 border border-transparent focus:border-fashion-sage focus:outline-none text-sm" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-3">Categories</h3>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link 
                      to={category.link} 
                      className={cn(
                        "block py-2 text-sm",
                        category.highlight && "text-fashion-rose font-medium"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Account</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/login" className="block py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
                </li>
                <li>
                  <Link to="/register" className="block py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Register</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="block py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      <span>Dashboard</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist" className="block py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center">
                      <Heart size={16} className="mr-2" />
                      <span>Wishlist</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="block py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>
                    <div className="flex items-center">
                      <ShoppingBag size={16} className="mr-2" />
                      <span>Bag</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
