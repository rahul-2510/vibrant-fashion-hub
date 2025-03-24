
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "With over 15 years of experience in the beauty industry, Sarah founded Quality Fashion to bring premium beauty products to everyone."
    },
    {
      name: "Michael Chen",
      role: "Chief Product Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "Michael oversees our product development, ensuring every item meets our rigorous quality standards before reaching our customers."
    },
    {
      name: "Emily Rodriguez",
      role: "Beauty Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "A former beauty editor, Emily curates our collections and keeps our offerings aligned with the latest trends and innovations."
    },
    {
      name: "David Wilson",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      bio: "David ensures our products and operations maintain our commitment to sustainability and ethical sourcing practices."
    }
  ];

  const values = [
    {
      title: "Quality",
      description: "We source only the highest quality ingredients and materials for all our products."
    },
    {
      title: "Sustainability",
      description: "Our commitment to the planet drives us to create environmentally responsible products and packaging."
    },
    {
      title: "Inclusivity",
      description: "We believe beauty is for everyone, and our products are designed to serve diverse customers."
    },
    {
      title: "Innovation",
      description: "We continuously seek new formulations and technologies to improve our offerings."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="pt-24 pb-16 px-4 bg-fashion-sage/10">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the journey behind Quality Fashion and our mission to bring premium beauty and fashion to everyone.
            </p>
          </div>
        </section>

        {/* Mission section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Our mission" 
                  className="rounded-lg shadow-lg object-cover w-full aspect-[4/3]"
                />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At Quality Fashion, we believe that beauty should be accessible, sustainable, and empowering. 
                  Founded in 2020, we set out to create a destination where customers could discover carefully curated 
                  premium beauty and fashion products that enhance their natural beauty.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our mission is to provide exceptional quality products that are ethically sourced, cruelty-free, 
                  and mindful of our environmental impact. We work directly with manufacturers and brands who share 
                  our values, ensuring that every item in our collection meets our rigorous standards.
                </p>
                <Button asChild className="bg-fashion-charcoal hover:bg-fashion-black text-white">
                  <Link to="/products">
                    Shop Our Collection
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Values section */}
        <section className="py-16 px-4 bg-fashion-ivory">
          <div className="container mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="glass p-6 rounded-lg">
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 relative mx-auto w-40 h-40">
                    <div className="absolute inset-0 rounded-full bg-fashion-sage/20"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="rounded-full w-36 h-36 object-cover absolute inset-0 m-auto border-4 border-white"
                    />
                  </div>
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-fashion-sage font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 px-4 bg-fashion-charcoal text-white">
          <div className="container mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold mb-4">Join the Quality Fashion Community</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8">
              Connect with us on social media to stay updated on new products, promotions, and beauty tips.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-fashion-sage hover:text-fashion-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-fashion-sage hover:text-fashion-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-fashion-sage hover:text-fashion-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h7.621v-6.961h-2.343v-2.725h2.343V9.309c0-2.324 1.421-3.591 3.495-3.591.699-.002 1.397.034 2.092.105v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.735h2.7l-.351 2.725h-2.365V21H19a2 2 0 002-2V5a2 2 0 00-2-2z"></path>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-fashion-sage hover:text-fashion-charcoal transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z"></path>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
