
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
    <section ref={heroRef} className="relative pt-28 pb-24 overflow-hidden">
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
      
      <div className="container">
        {/* More eye-catching badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge 
            variant="outline" 
            className="mb-7 py-1.5 text-sm rounded-full font-medium px-5 border-primary/30 bg-primary/5 text-primary mx-auto block w-fit"
          >
            <motion.span 
              className="mr-1.5 inline-flex"
              {...pulseSlow}
            >
              <Sparkles className="h-4 w-4 mr-1 text-primary" />
            </motion.span>
            Introducing Sign in Seconds
          </Badge>
        </motion.div>
        
        <motion.h1 
          className="font-medium text-center mx-auto max-w-3xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          E-signatures made <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 font-semibold">simple</span> for small businesses
        </motion.h1>
        
        <motion.p 
          className="text-center text-muted-foreground text-lg md:text-xl mx-auto max-w-2xl mb-11"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Get documents signed quickly and securely with our intuitive e-signature platform designed specifically for small businesses.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Button size="lg" className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90 group shadow-xl shadow-primary/20 relative overflow-hidden">
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5 }}
            />
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6 hover:bg-secondary/10">
            See How It Works
          </Button>
        </motion.div>
        
        {/* More elegant stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-3xl mx-auto mb-20">
          {[
            { value: "93%", label: "Time saved on document processing" },
            { value: "10k+", label: "Small businesses use our platform" },
            { value: "24/7", label: "Customer support availability" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="glass-card p-7 text-center hover-lift relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Subtle gradient animation on hover */}
              <motion.div 
                className="absolute inset-0 opacity-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Enhanced Hero Animation - E-signature Process */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          {...floatAnimation}
        >
          {/* Main card with subtle improved glass effect */}
          <div className="glass-card rounded-2xl overflow-hidden border border-white/40 shadow-2xl">
            <div className="w-full aspect-[16/9] relative bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-4 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50"></div>
              
              {/* E-Signature Process Animation */}
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-4xl w-full">
                  <h3 className="text-2xl font-medium mb-7 text-center">
                    Simple, Secure, and 
                    <motion.span 
                      className="text-primary ml-1.5"
                      animate={{ 
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity, 
                        repeatType: "reverse"
                      }}
                    >
                      Legally Binding
                    </motion.span>
                  </h3>
                  
                  {/* Enhanced Animation Steps */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
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
                          repeatType: "reverse"
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
                      className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={animationStep === 0 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        animate={animationStep === 0 ? pulseSlow.animate : {}}
                        initial={pulseSlow.initial}
                      >
                        <Upload className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h4 className="text-xl font-medium mb-2">Upload Documents</h4>
                      <p className="text-muted-foreground mb-6">
                        Easily upload your documents in any format - PDF, Word, or images.
                      </p>
                      <motion.div 
                        className="glass p-4 w-full rounded-lg border border-white/30 flex items-center justify-center gap-3"
                        whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                      >
                        <FileSignature className="h-6 w-6 text-primary" />
                        <span className="text-sm">Contract_Draft.pdf</span>
                        <div className="ml-auto">
                          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: 1, repeatDelay: 1 }}>
                            <Check className="h-5 w-5 text-green-500" />
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
                      className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={animationStep === 1 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        animate={animationStep === 1 ? pulseSlow.animate : {}}
                        initial={pulseSlow.initial}
                      >
                        <Mail className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h4 className="text-xl font-medium mb-2">Add Recipients</h4>
                      <p className="text-muted-foreground mb-6">
                        Add who needs to sign and in what order. Assign fields for each signer.
                      </p>
                      <motion.div 
                        className="glass p-4 w-full rounded-lg border border-white/30 flex flex-col gap-3"
                        whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                      >
                        <motion.div 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={animationStep === 1 ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.2 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">1</div>
                          <span>john@example.com</span>
                          <Badge variant="outline" className="ml-auto">Signer</Badge>
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={animationStep === 1 ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-medium text-purple-700">2</div>
                          <span>sarah@example.com</span>
                          <Badge variant="outline" className="ml-auto">Signer</Badge>
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
                      className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={animationStep === 2 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4"
                        animate={animationStep === 2 ? pulseSlow.animate : {}}
                        initial={pulseSlow.initial}
                      >
                        <PenLine className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h4 className="text-xl font-medium mb-2">Sign Documents</h4>
                      <p className="text-muted-foreground mb-6">
                        Recipients sign documents with just a few clicks. No account needed.
                      </p>
                      <motion.div 
                        className="glass p-4 w-full rounded-lg border border-white/30 flex items-center justify-center"
                        whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                      >
                        <div className="relative w-full h-24 bg-white/10 rounded border border-dashed border-white/30 flex items-center justify-center">
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
                              repeatType: "reverse"
                            }}
                          >
                            <MousePointer className="h-4 w-4 text-primary" />
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
                      className="glass-card p-8 rounded-xl max-w-md flex flex-col items-center text-center border border-white/30"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={animationStep === 3 ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4"
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
                        <Check className="h-8 w-8 text-green-500" />
                      </motion.div>
                      <h4 className="text-xl font-medium mb-2">Complete & Secure</h4>
                      <p className="text-muted-foreground mb-6">
                        All parties receive a legally binding copy. Documents are securely stored.
                      </p>
                      <motion.div 
                        className="glass p-4 w-full rounded-lg border border-white/30 flex items-center justify-between"
                        whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)" }}
                        initial={{ y: 10, opacity: 0 }}
                        animate={animationStep === 3 ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
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
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced decorative elements */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-xl"
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
            className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-gradient-to-tr from-primary/20 to-primary/10 blur-xl"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
