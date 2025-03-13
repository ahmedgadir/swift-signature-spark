
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl opacity-70" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-3xl opacity-70" />
      </div>
      
      <div className="container">
        <div className="glass-card p-8 sm:p-12 md:p-16 border border-white/20 max-w-5xl mx-auto relative z-10 animate-on-scroll">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-medium mb-6">
              Start streamlining your document workflows today
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of small businesses who have simplified their signature process with Sign in Seconds.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full text-base px-8 py-6 bg-primary hover:bg-primary/90 group shadow-lg shadow-primary/20">
                Start Your Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 py-6">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
