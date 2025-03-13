
import React, { useEffect } from 'react';
import { 
  FileSignature, 
  Shield, 
  Clock, 
  Users, 
  Globe, 
  Smartphone,
  Workflow,
  Cloud,
  LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

const FeatureCard = ({ title, description, icon: Icon, delay }: FeatureCardProps) => (
  <div className={`glass-card p-6 hover-lift animate-on-scroll`} style={{ transitionDelay: `${delay}ms` }}>
    <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      title: "Quick Signatures",
      description: "Get documents signed in seconds with our streamlined process and intuitive interface.",
      icon: FileSignature,
      delay: 100
    },
    {
      title: "Bank-Level Security",
      description: "Your documents are protected with enterprise-grade encryption and security measures.",
      icon: Shield,
      delay: 200
    },
    {
      title: "Save Time",
      description: "Automate your document workflow and reduce processing time by up to 93%.",
      icon: Clock,
      delay: 300
    },
    {
      title: "Team Collaboration",
      description: "Easily collaborate with team members and track document status in real-time.",
      icon: Users,
      delay: 400
    },
    {
      title: "Global Compliance",
      description: "Our e-signatures are legally binding and compliant with ESIGN, UETA, and eIDAS.",
      icon: Globe,
      delay: 500
    },
    {
      title: "Mobile Friendly",
      description: "Sign documents from anywhere using our responsive mobile interface.",
      icon: Smartphone,
      delay: 600
    },
    {
      title: "Custom Workflows",
      description: "Create customized signature workflows to match your business processes.",
      icon: Workflow,
      delay: 700
    },
    {
      title: "Cloud Storage",
      description: "Securely store all your signed documents in the cloud for easy access.",
      icon: Cloud,
      delay: 800
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
      </div>
      
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-medium mb-4">
              Everything you need for <span className="text-primary">effortless</span> e-signatures
            </h2>
            <p className="text-muted-foreground text-lg">
              Our platform simplifies the e-signature process with powerful features designed specifically for small businesses.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
