
import React from 'react';
import { Mail, MapPin, Phone, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [submitted, setSubmitted] = React.useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
  
    try {
      const res = await fetch('https://memotag-web-backend.vercel.app/send-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'anujsinghhero292@gmail.com', 
          subject: `Contact Form: ${subject}`,
          content: `Sender Name: ${name}\nSender Email: ${email}\n\nMessage:\n${message}`,
        }),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        setSubmitted(true);
        toast({
                title: "Mail Sent Successfully!",
                description: "We'll be in touch soon.",
                });
        e.target.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Try again later.');
    }
  };
  

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-memotag-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-96 h-96 bg-memotag-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-lg font-medium text-memotag-primary reveal-fade">GET IN TOUCH</h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 reveal-zoom">
            Contact <span className="gradient-text">Us</span>
          </h3>
          <p className="mt-4 text-memotag-text/80 max-w-2xl mx-auto reveal">
            Have questions about MemoTag? We're here to help. Reach out to our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Card className={cn(
            "border-none shadow-custom reveal-left",
            "transform transition-all hover:-translate-y-1 hover:shadow-lg"
          )}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-memotag-primary to-memotag-accent flex items-center justify-center mb-4 shadow-md">
                <Mail className="text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Email Us</h4>
              <p className="text-memotag-text/80 mb-4">For general inquiries and support</p>
              <a 
                href="mailto:contact@memotag.io" 
                className="text-memotag-primary hover:underline font-medium inline-flex items-center gap-1 group"
              >
                contact@memotag.io
                <Send size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </CardContent>
          </Card>

          <Card className={cn(
            "border-none shadow-custom reveal",
            "transform transition-all hover:-translate-y-1 hover:shadow-lg"
          )}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-memotag-primary to-memotag-accent flex items-center justify-center mb-4 shadow-md">
                <MapPin className="text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Our Location</h4>
              <p className="text-memotag-text/80 mb-4">Visit our Delhi headquarters</p>
              <p className="text-memotag-text">
                MemoTag<br />
                A-19 Ramesh Nagar, New Delhi<br />
                Delhi, India
              </p>
            </CardContent>
          </Card>

          <Card className={cn(
            "border-none shadow-custom reveal-right",
            "transform transition-all hover:-translate-y-1 hover:shadow-lg"
          )}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-memotag-primary to-memotag-accent flex items-center justify-center mb-4 shadow-md">
                <Phone className="text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2">Call Us</h4>
              <p className="text-memotag-text/80 mb-4">Mon-Fri, 10:00 AM - 6:00 PM</p>
              <p className="text-memotag-text">+91 8800506622</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 reveal-left">
              <Card className="border-none shadow-lg overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-memotag-primary to-memotag-accent"></div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <MessageCircle className="text-memotag-primary" size={20} />
                    Send Us a Message
                  </h4>
                  
                  {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-memotag-text/80 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-memotag-primary/50"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-memotag-text/80 mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-memotag-primary/50"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-memotag-text/80 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-memotag-primary/50"
                          placeholder="How can we help you?"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-memotag-text/80 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-memotag-primary/50"
                          placeholder="Please provide details about your inquiry..."
                        ></textarea>
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-memotag-primary hover:bg-memotag-accent text-white group"
                      >
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                      </Button>
                    </form>
                  ) : (
                    <div className="py-10 px-4 text-center">
                      <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h5 className="text-xl font-bold mb-2">Message Sent!</h5>
                      <p className="text-memotag-text/80">
                        Thank you for reaching out to us. We'll get back to you shortly.
                      </p>
                      <Button 
                        onClick={() => setSubmitted(false)}
                        variant="outline" 
                        className="mt-4"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-2 reveal-right">
              <div className="bg-memotag-primary/10 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-4">Looking for partnerships?</h4>
                <p className="text-memotag-text/80 mb-6">
                  If you represent a healthcare facility, research institution, or potential investor, 
                  we'd love to explore collaboration opportunities.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-memotag-primary/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                        <path d="M7 21h10"></path>
                        <path d="M12 3v18"></path>
                        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Healthcare Institutions</h5>
                      <p className="text-sm text-memotag-text/70">Integrate MemoTag into your memory care programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-memotag-primary/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Research Collaborations</h5>
                      <p className="text-sm text-memotag-text/70">Partner with us on clinical studies and publications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-memotag-primary/20 flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-memotag-primary">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="M2 12h20"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-medium mb-1">Global Expansion</h5>
                      <p className="text-sm text-memotag-text/70">Bring MemoTag to new markets worldwide</p>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-6 w-full bg-white text-memotag-primary hover:bg-memotag-primary hover:text-white transition-colors"
                >
                  Contact for Partnerships
                </Button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
