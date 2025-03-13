
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Unlimited document signing",
    "Up to 5 team members",
    "Document templates",
    "Custom branding",
    "Email notifications",
    "Audit trails",
    "Cloud storage",
    "Mobile app access",
    "Priority support"
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees or complicated tiers. Just one affordable plan for your business.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto animate-on-scroll">
          <div className="glass-card p-8 border-2 border-primary/20 relative overflow-hidden">
            {/* Pricing badge */}
            <div className="absolute -right-12 top-8 rotate-45 bg-primary text-primary-foreground px-12 py-1 text-sm font-medium">
              Best Value
            </div>
            
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 py-1 text-sm font-medium px-3 border-primary/20 bg-primary/5 text-primary">
                Business Plan
              </Badge>
              
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">$25</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              
              <p className="text-muted-foreground">
                Everything you need for your small business
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="w-full rounded-full py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              Get Started Now
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
