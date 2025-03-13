
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, PenLine, FileSignature, MousePointer, Upload, Mail, Clock, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { floatAnimation, pulseSlow, shineEffect } from '@/lib/animations';

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

  // Animation steps cycle with a slightly longer duration for better readability
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % 4);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={heroRef} className="relative pt-20 pb-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-[60%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tl from-primary/10 to-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
      
      <div className="container px-4">
        {/* Two-column layout with clear separation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Badge 
                variant="outline" 
                className="py-1.5 text-sm rounded-full font-medium px-5 border-primary/30 bg-primary/5 text-primary block w-fit"
              >
                <motion.span 
                  className="mr-1.5 inline-flex"
                  initial={pulseSlow.initial}
                  animate={pulseSlow.animate}
                >
                  <Sparkles className="h-4 w-4 mr-1 text-primary" />
                </motion.span>
                Introducing Sign in Seconds
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="font-medium mb-6 text-3xl md:text-4xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              E-signatures made <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-semibold">simple</span> for small businesses
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Get documents signed quickly and securely with our intuitive e-signature platform designed specifically for small businesses.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-start gap-5 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button size="lg" className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90 group shadow-xl shadow-primary/20 relative overflow-hidden w-full sm:w-auto">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
                />
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 hover:bg-secondary/10 w-full sm:w-auto">
                See How It Works
              </Button>
            </motion.div>
            
            {/* Stats moved to single row below CTA */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-xl">
              {[
                { value: "93%", label: "Time saved" },
                { value: "10k+", label: "Small businesses" },
                { value: "24/7", label: "Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-4 text-center hover-lift relative overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -3 }}
                >
                  {/* Subtle gradient animation on hover */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Right Column - Animation contained within its column */}
          <motion.div 
            className="relative flex items-center justify-center h-full"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Animation positioned properly within the right column */}
            <div className="w-full max-w-md relative">
              {/* Main card with subtle improved glass effect */}
              <div className="glass-card rounded-2xl overflow-hidden border border-white/40 shadow-2xl">
                <div className="w-full aspect-[4/3] relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-4 sm:p-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50"></div>
                  
                  {/* E-Signature Process Animation */}
                  <div className="relative h-full flex items-center justify-center">
                    <div className="w-full max-w-lg">
                      <h3 className="text-lg sm:text-xl font-medium mb-4 text-center">
                        Simple, Secure, and 
                        <motion.span 
                          className="text-primary ml-1.5"
                          animate={{ 
                            opacity: [0.8, 1, 0.8],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                        >
                          Legally Binding
                        </motion.span>
                      </h3>
                      
                      {/* Enhanced Animation Steps */}
                      <div className="grid grid-cols-4 gap-4 mb-4">
                        {[0, 1, 2, 3].map((step) => (
                          <motion.div 
                            key={step} 
                            className={cn(
                              "relative h-1.5 rounded-full",
                              animationStep >= step ? "bg-primary" : "bg-gray-300/50"
                            )}
                            animate={animationStep === step ? {
                              scale: [1, 1.05, 1],
                              opacity: [0.8, 1, 0.8]
                            } : {}}
                            transition={{
                              duration: 2,
                              repeat: animationStep === step ? Infinity : 0,
                              repeatType: "reverse",
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Step 1: Upload - Enhanced with motion */}
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                        animationStep === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}>
                        <motion.div 
                          className="glass-card p-4 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={animationStep === 0 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2"
                            initial={pulseSlow.initial}
                            animate={animationStep === 0 ? pulseSlow.animate : {}}
                          >
                            <Upload className="h-6 w-6 text-primary" />
                          </motion.div>
                          <h4 className="text-base font-medium mb-1">Upload Documents</h4>
                          <p className="text-muted-foreground text-xs mb-2">
                            Easily upload your documents in any format.
                          </p>
                          <motion.div 
                            className="glass p-2 w-full rounded-lg border border-white/30 flex items-center justify-center gap-2"
                            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                          >
                            <FileSignature className="h-4 w-4 text-primary" />
                            <span className="text-xs">Contract_Draft.pdf</span>
                            <div className="ml-auto">
                              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: 1, repeatDelay: 1 }}>
                                <Check className="h-3.5 w-3.5 text-green-500" />
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Step 2: Add Recipients - Enhanced with motion */}
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                        animationStep === 1 ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}>
                        <motion.div 
                          className="glass-card p-4 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={animationStep === 1 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2"
                            initial={pulseSlow.initial}
                            animate={animationStep === 1 ? pulseSlow.animate : {}}
                          >
                            <Mail className="h-6 w-6 text-primary" />
                          </motion.div>
                          <h4 className="text-base font-medium mb-1">Add Recipients</h4>
                          <p className="text-muted-foreground text-xs mb-2">
                            Add who needs to sign and in what order.
                          </p>
                          <motion.div 
                            className="glass p-2 w-full rounded-lg border border-white/30 flex flex-col gap-1"
                            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                          >
                            <motion.div 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={animationStep === 1 ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: 0.2 }}
                            >
                              <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">1</div>
                              <span className="text-xs">john@example.com</span>
                              <Badge variant="outline" className="ml-auto text-[10px] py-0">Signer</Badge>
                            </motion.div>
                            <motion.div 
                              className="flex items-center gap-2"
                              initial={{ opacity: 0, x: -10 }}
                              animate={animationStep === 1 ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.3, delay: 0.4 }}
                            >
                              <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700">2</div>
                              <span className="text-xs">sarah@example.com</span>
                              <Badge variant="outline" className="ml-auto text-[10px] py-0">Signer</Badge>
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Step 3: Sign - Enhanced with motion */}
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                        animationStep === 2 ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}>
                        <motion.div 
                          className="glass-card p-4 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={animationStep === 2 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2"
                            initial={pulseSlow.initial}
                            animate={animationStep === 2 ? pulseSlow.animate : {}}
                          >
                            <PenLine className="h-6 w-6 text-primary" />
                          </motion.div>
                          <h4 className="text-base font-medium mb-1">Sign Documents</h4>
                          <p className="text-muted-foreground text-xs mb-2">
                            Recipients sign with just a few clicks.
                          </p>
                          <motion.div 
                            className="glass p-2 w-full rounded-lg border border-white/30 flex items-center justify-center"
                            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                          >
                            <div className="relative w-full h-16 bg-white/10 rounded border border-dashed border-white/30 flex items-center justify-center">
                              <motion.img 
                                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjUwIiB2aWV3Qm94PSIwIDAgMjAwIDUwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0xMCAxMCBDMjAgNSA0MCAyMCA1MCAxNSBDNjAgMTAgODAgMzAgOTAgMjUgQzEwMCAyMCAxMjAgNDAgMTMwIDM1IEMxNDAgMzAgMTYwIDEwIDE3MCAxNSBDMTgwIDIwIDE5MCAzMCAxOTAgMzUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY0NzZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+" 
                                alt="Signature" 
                                className="max-w-full"
                                animate={animationStep === 2 ? { 
                                  opacity: [0, 1],
                                  scale: [0.9, 1],
                                  y: [5, 0]
                                } : {}}
                                transition={{ duration: 0.8 }}
                              />
                              <motion.div 
                                className="absolute bottom-2 right-2"
                                animate={animationStep === 2 ? { 
                                  scale: [1, 1.1, 1],
                                  opacity: [0.7, 1, 0.7]
                                } : {}}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity,
                                  repeatType: "reverse",
                                }}
                              >
                                <MousePointer className="h-3 w-3 text-primary" />
                              </motion.div>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                      
                      {/* Step 4: Complete - Enhanced with motion */}
                      <div className={cn(
                        "absolute inset-0 flex items-center justify-center transition-opacity duration-500 pt-16",
                        animationStep === 3 ? "opacity-100" : "opacity-0 pointer-events-none"
                      )}>
                        <motion.div 
                          className="glass-card p-4 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={animationStep === 3 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-2"
                            animate={animationStep === 3 ? { 
                              scale: [1, 1.1, 1],
                              boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0)", "0 0 0 10px rgba(34, 197, 94, 0.1)", "0 0 0 0 rgba(34, 197, 94, 0)"]
                            } : {}}
                            transition={{ 
                              duration: 2, 
                              repeat: Infinity,
                              repeatType: "loop"
                            }}
                          >
                            <Check className="h-6 w-6 text-green-500" />
                          </motion.div>
                          <h4 className="text-base font-medium mb-1">Complete & Secure</h4>
                          <p className="text-muted-foreground text-xs mb-2">
                            All parties receive a legally binding copy.
                          </p>
                          <motion.div 
                            className="glass p-2 w-full rounded-lg border border-white/30 flex items-center justify-between"
                            whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                            initial={{ y: 10, opacity: 0 }}
                            animate={animationStep === 3 ? { y: 0, opacity: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <div className="flex items-center gap-2">
                              <FileSignature className="h-4 w-4 text-green-500" />
                              <div className="text-left">
                                <p className="text-xs font-medium">Contract_Signed.pdf</p>
                                <p className="text-[10px] text-muted-foreground">Completed</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3 text-muted-foreground" />
                              <span className="text-[10px] text-muted-foreground">Now</span>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced decorative elements */}
              <motion.div 
                className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div 
                className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-primary/10 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
