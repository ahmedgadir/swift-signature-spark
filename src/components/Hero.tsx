
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, PenLine, FileSignature, MousePointer, Upload, Mail, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [animationStep, setAnimationStep] = useState(0);
  
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

  // Animation steps cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
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
        
        {/* Hero Animation - E-signature Process */}
        <div className="relative max-w-5xl mx-auto animate-fade-in">
          <div className="glass-card rounded-2xl overflow-hidden border border-white/30 shadow-xl">
            <div className="w-full aspect-[16/9] relative bg-gradient-to-br from-primary/5 to-primary/10 p-4 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50"></div>
              
              {/* E-Signature Process Animation */}
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-4xl w-full">
                  <h3 className="text-2xl font-medium mb-6 text-center">
                    Simple, Secure, and Legally Binding
                  </h3>
                  
                  {/* Animation Steps */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[0, 1, 2, 3].map((step) => (
                      <div 
                        key={step} 
                        className={cn(
                          "relative h-1 rounded-full bg-gray-300",
                          animationStep >= step ? "bg-primary" : "bg-gray-300"
                        )}
                      />
                    ))}
                  </div>
                  
                  {/* Step 1: Upload */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                    animationStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}>
                    <div className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Upload className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Upload Documents</h4>
                      <p className="text-muted-foreground mb-6">
                        Easily upload your documents in any format - PDF, Word, or images.
                      </p>
                      <div className="glass p-4 w-full rounded-lg border border-white/20 flex items-center justify-center gap-3">
                        <FileSignature className="h-6 w-6 text-primary" />
                        <span className="text-sm">Contract_Draft.pdf</span>
                        <div className="ml-auto">
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: Add Recipients */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                    animationStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}>
                    <div className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Mail className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Add Recipients</h4>
                      <p className="text-muted-foreground mb-6">
                        Add who needs to sign and in what order. Assign fields for each signer.
                      </p>
                      <div className="glass p-4 w-full rounded-lg border border-white/20 flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">1</div>
                          <span>john@example.com</span>
                          <Badge variant="outline" className="ml-auto">Signer</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700">2</div>
                          <span>sarah@example.com</span>
                          <Badge variant="outline" className="ml-auto">Signer</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3: Sign */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                    animationStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}>
                    <div className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <PenLine className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Sign Documents</h4>
                      <p className="text-muted-foreground mb-6">
                        Recipients sign documents with just a few clicks. No account needed.
                      </p>
                      <div className="glass p-4 w-full rounded-lg border border-white/20 flex items-center justify-center">
                        <div className="relative w-full h-24 bg-white/5 rounded border border-dashed border-white/20 flex items-center justify-center">
                          <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMCAxMCBDMjAgNSA0MCAyMCA1MCAxNSBDNjAgMTAgODAgMzAgOTAgMjUgQzEwMCAyMCAxMjAgNDAgMTMwIDM1IEMxNDAgMzAgMTYwIDEwIDE3MCAxNSBDMTgwIDIwIDE5MCAzMCAxOTAgMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY0NzZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+" 
                            alt="Signature" 
                            className="max-w-full" />
                          <div className="absolute bottom-2 right-2 animate-pulse">
                            <MousePointer className="h-4 w-4 text-primary" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4: Complete */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                    animationStep === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
                  )}>
                    <div className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                        <Check className="h-8 w-8 text-green-500" />
                      </div>
                      <h4 className="text-xl font-medium mb-2">Complete & Secure</h4>
                      <p className="text-muted-foreground mb-6">
                        All parties receive a legally binding copy. Documents are securely stored.
                      </p>
                      <div className="glass p-4 w-full rounded-lg border border-white/20 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileSignature className="h-6 w-6 text-green-500" />
                          <div className="text-left">
                            <p className="text-sm font-medium">Contract_Signed.pdf</p>
                            <p className="text-xs text-muted-foreground">Completed • All signatures collected</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">Just now</span>
                        </div>
                      </div>
                    </div>
                  </div>
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
