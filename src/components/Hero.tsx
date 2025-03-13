
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, PenLine, FileSignature, MousePointer } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container">
        <Badge variant="outline" className="animate-fade-in mb-6 py-1.5 text-sm rounded-full font-medium px-4 border-primary/20 bg-primary/5 text-primary mx-auto block w-fit">
          Introducing Sign in Seconds
        </Badge>
        
        <h1 className="font-medium text-center animate-fade-in mx-auto max-w-3xl mb-6">
          E-signatures made <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">simple</span> for small businesses
        </h1>
        
        <p className="text-center text-muted-foreground text-lg md:text-xl animate-fade-in mx-auto max-w-2xl mb-10">
          Get documents signed quickly and securely with our intuitive e-signature platform designed specifically for small businesses.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in mb-16">
          <Button size="lg" className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6">
            See How It Works
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="text-4xl font-bold mb-2">93%</h3>
            <p className="text-muted-foreground">Time saved on document processing</p>
          </div>
          
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="text-4xl font-bold mb-2">10k+</h3>
            <p className="text-muted-foreground">Small businesses use our platform</p>
          </div>
          
          <div className="glass-card p-6 text-center hover-lift">
            <h3 className="text-4xl font-bold mb-2">24/7</h3>
            <p className="text-muted-foreground">Customer support availability</p>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="glass-card rounded-2xl overflow-hidden border border-white/30 shadow-xl">
            <div className="w-full aspect-[16/9] relative bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-8">
              <div className="absolute top-8 left-8 glass rounded-lg p-2 animate-float shadow-lg">
                <FileSignature className="h-6 w-6 text-primary" />
              </div>
              
              <div className="absolute bottom-12 right-12 glass rounded-lg p-3 animate-float shadow-lg delay-300">
                <PenLine className="h-8 w-8 text-primary" />
              </div>
              
              <div className="absolute top-1/3 right-1/4 glass rounded-full w-12 h-12 flex items-center justify-center animate-pulse-subtle">
                <MousePointer className="h-6 w-6 text-primary" />
              </div>
              
              <div className="absolute top-2/3 left-1/4 p-3 glass rounded-lg animate-float shadow-lg delay-500">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Signed</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50"></div>
              
              <div className="relative h-full flex items-center justify-center">
                <div className="glass-card p-8 max-w-lg text-center">
                  <h3 className="text-2xl font-medium mb-4">Simple, Secure, and Legally Binding</h3>
                  <p className="text-muted-foreground">Our e-signature platform makes it effortless to get documents signed while maintaining legal compliance and bank-level security.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-primary/20 blur-xl"></div>
          <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
