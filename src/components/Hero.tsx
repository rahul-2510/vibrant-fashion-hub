
import { ButtonWithIcon } from "./ui/button-with-icon";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSlide {
  id: number;
  heading: string;
  subheading: string;
  imageSrc: string;
  cta: string;
  link: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    heading: "Summer Collection 2023",
    subheading: "Discover the latest trends in summer fashion with our exclusive collection.",
    imageSrc: "https://images.unsplash.com/photo-1469504512102-900f29606341?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cta: "Shop Now",
    link: "#summer"
  },
  {
    id: 2,
    heading: "Luxury Fragrances",
    subheading: "Explore our curated collection of exclusive fragrances from around the world.",
    imageSrc: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cta: "Discover",
    link: "#fragrances"
  },
  {
    id: 3,
    heading: "Skincare Essentials",
    subheading: "Premium skincare products designed for every skin type and concern.",
    imageSrc: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    cta: "Explore",
    link: "#skincare"
  }
];

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [activeSlide, isAnimating]);
  
  return (
    <section className="relative w-full h-[80vh] mt-[72px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fashion-charcoal/60 to-transparent z-10" />
          <img
            src={slide.imageSrc}
            alt={slide.heading}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          <div className="relative z-20 container mx-auto h-full flex flex-col justify-center px-4 md:px-8">
            <div className={`max-w-2xl transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
            }`}>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">{slide.heading}</h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">{slide.subheading}</p>
              <ButtonWithIcon 
                variant="primary" 
                size="lg" 
                icon={<ChevronRight size={16} />} 
                iconPosition="right"
                className="bg-white text-fashion-charcoal hover:bg-fashion-silver"
              >
                {slide.cta}
              </ButtonWithIcon>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </section>
  );
}
