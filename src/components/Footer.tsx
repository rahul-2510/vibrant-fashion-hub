
import { Link } from "react-router-dom";

export function Footer() {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "Makeup", url: "#makeup" },
        { name: "Skincare", url: "#skincare" },
        { name: "Hair", url: "#hair" },
        { name: "Fragrance", url: "#fragrance" },
        { name: "Tools", url: "#tools" },
        { name: "Men", url: "#men" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Our Story", url: "#about" },
        { name: "Careers", url: "#careers" },
        { name: "Press", url: "#press" },
        { name: "Sustainability", url: "#sustainability" },
        { name: "Stores", url: "#stores" },
      ],
    },
    {
      title: "Customer Service",
      links: [
        { name: "Contact Us", url: "#contact" },
        { name: "FAQ", url: "#faq" },
        { name: "Shipping & Returns", url: "#shipping" },
        { name: "Track Order", url: "#track" },
        { name: "Gift Cards", url: "#gift-cards" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", url: "#terms" },
        { name: "Privacy Policy", url: "#privacy" },
        { name: "Cookie Policy", url: "#cookies" },
        { name: "Accessibility", url: "#accessibility" },
      ],
    },
  ];
  
  const socialLinks = [
    { name: "Instagram", url: "#instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { name: "Facebook", url: "#facebook", icon: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h7.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.365V21H19a2 2 0 002-2V5a2 2 0 00-2-2z" },
    { name: "Twitter", url: "#twitter", icon: "M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" },
    { name: "Pinterest", url: "#pinterest", icon: "M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" },
    { name: "YouTube", url: "#youtube", icon: "M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" },
  ];
  
  return (
    <footer className="bg-fashion-charcoal text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <h1 className="font-serif text-2xl font-bold tracking-tight">Quality<span className="text-fashion-sage">Fashion</span></h1>
            </Link>
            <p className="text-white/70 mb-6 max-w-md">
              Quality Fashion offers premium beauty and fashion products that help you express your unique style and enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-fashion-sage hover:text-fashion-charcoal transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-medium text-lg mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.url}
                      className="text-white/70 hover:text-fashion-sage transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm">
            &copy; {year} Quality Fashion. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
            <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/payments-dark.png?v=1522391381" alt="Payment methods" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
