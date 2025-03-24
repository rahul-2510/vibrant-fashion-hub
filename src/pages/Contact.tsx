
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We've received your message and will get back to you soon.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="pt-24 pb-16 px-4 bg-fashion-sage/10">
          <div className="container mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have a question or feedback? We'd love to hear from you. Our team is always ready to help.
            </p>
          </div>
        </section>

        {/* Contact info and form */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Contact information */}
              <div className="md:col-span-1 space-y-8">
                <div className="glass p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 bg-fashion-sage/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-fashion-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Our Location</h3>
                      <p className="text-muted-foreground text-sm">
                        123 Fashion Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 bg-fashion-sage/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-fashion-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        Customer Service: +1 (555) 123-4567<br />
                        Returns & Orders: +1 (555) 987-6543
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 bg-fashion-sage/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-fashion-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        Customer Support: support@qualityfashion.com<br />
                        Inquiries: info@qualityfashion.com<br />
                        Partnerships: partners@qualityfashion.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-4 bg-fashion-sage/20 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-fashion-charcoal" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                        Saturday: 10:00 AM - 4:00 PM EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div className="md:col-span-2 glass p-8 rounded-lg">
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jane Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane.doe@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      id="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message here..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-fashion-charcoal hover:bg-fashion-black text-white"
                    disabled={loading}
                  >
                    {loading ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <div className="relative w-full h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175568158687!2d-73.9922535!3d40.7501347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1651254390935!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Quality Fashion location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        <section className="py-16 px-4 bg-fashion-sage/10">
          <div className="container mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="glass p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">What is your return policy?</h3>
                <p className="text-muted-foreground">
                  We offer a 30-day return policy on all unused items in their original packaging. Please visit our 
                  Returns page for detailed instructions on how to initiate a return.
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">How long does shipping take?</h3>
                <p className="text-muted-foreground">
                  Standard shipping typically takes 3-5 business days within the continental US. Express shipping options 
                  are available at checkout for 1-2 business day delivery.
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Are your products cruelty-free?</h3>
                <p className="text-muted-foreground">
                  Yes, all our beauty products are cruelty-free and we never test on animals. Many of our products are also 
                  vegan, which is indicated in the product description.
                </p>
              </div>
              <div className="glass p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2">Do you offer international shipping?</h3>
                <p className="text-muted-foreground">
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location 
                  and will be calculated at checkout.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
