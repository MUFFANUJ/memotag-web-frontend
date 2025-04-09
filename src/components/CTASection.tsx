
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/hooks/use-toast';
import { Brain, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  interest: string;
  message: string;
}

const CTASection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    interest: 'caregiver',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (value: string) => {
    setFormData(prev => ({ ...prev, interest: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('http://localhost:3000/send-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'anujsinghhero292@gmail.com',   
          subject: `Contact Form from ${formData.name} - ${formData.interest}`,
          content: `
  Name: ${formData.name}
  Email: ${formData.email}
  Interested As: ${formData.interest}
  Message: ${formData.message || 'No Message Provided'}
          `,
        }),
      });
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (res.ok) {
        toast({
          title: "Successfully joined waitlist!",
          description: "We'll be in touch soon with more details about MemoTag.",
        });
        setIsSubmitted(false);
        setFormData({ name: '', email: '', interest: '', message: '' });
      }
    } catch (err) {
      setIsSubmitting(false);
        toast({
          title: "Something went wrong",
          description: "Please try again later.",
          variant: "destructive"
        });
    }
  };
  

  return (
    <section id="waitlist" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 brain-bg opacity-10"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-custom overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-to-br from-memotag-primary to-memotag-accent p-8 lg:p-10 text-white">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 reveal">
                  <Brain className="w-6 h-6" />
                  <span className="font-medium">MemoTag</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold reveal">Join Our Waitlist</h3>
                <p className="text-white/90 reveal">
                  Be among the first to experience MemoTag's revolutionary approach to memory care.
                </p>
                <div className="space-y-4 reveal">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white mt-1">
                      1
                    </div>
                    <p className="text-white/90">Early access to the MemoTag platform</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white mt-1">
                      2
                    </div>
                    <p className="text-white/90">Exclusive updates on our development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white mt-1">
                      3
                    </div>
                    <p className="text-white/90">Special pricing for early adopters</p>
                  </div>
                </div>
                <div className="pt-4 reveal">
                  <p className="text-sm text-white/80">
                    For investment opportunities or partnerships, please contact us at{' '}
                    <a href="mailto:contact@memotag.io" className="underline">contact@memotag.io</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">Thank You!</h4>
                  <p className="text-memotag-text/80">
                    You're now on the MemoTag waitlist. We'll keep you updated on our progress.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 reveal">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Full name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="you@example.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>I am interested as a:</Label>
                    <RadioGroup 
                      value={formData.interest}
                      onValueChange={handleInterestChange}
                      className="flex flex-wrap gap-x-6 gap-y-3 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="caregiver" id="caregiver" />
                        <Label htmlFor="caregiver" className="cursor-pointer">Caregiver</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="healthcare" id="healthcare" />
                        <Label htmlFor="healthcare" className="cursor-pointer">Healthcare Professional</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="business" id="business" />
                        <Label htmlFor="business" className="cursor-pointer">Business Partner</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other" className="cursor-pointer">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your interest in MemoTag..."
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 resize-none"
                      rows={3}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-memotag-primary hover:bg-memotag-accent"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Join Waitlist
                      </span>
                    )}
                  </Button>

                  <p className="text-xs text-center text-memotag-text/60">
                    By joining, you agree to receive updates about MemoTag. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
