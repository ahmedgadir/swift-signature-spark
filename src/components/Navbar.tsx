
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ChevronRight, 
  Menu, 
  X,
  PenLine
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "py-2 glass shadow-sm" : "py-4 bg-transparent"
    )}>
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="rounded-md bg-primary/10 p-2">
            <PenLine className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-medium">
            Sign in Seconds
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
          <Button variant="outline" className="ml-2">
            Log In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 group">
            Get Started
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 z-50 bg-background/95 backdrop-blur-sm transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
            <a href="#features" className="text-lg font-medium" onClick={toggleMobileMenu}>
              Features
            </a>
            <a href="#pricing" className="text-lg font-medium" onClick={toggleMobileMenu}>
              Pricing
            </a>
            <a href="#faq" className="text-lg font-medium" onClick={toggleMobileMenu}>
              FAQ
            </a>
            <div className="flex flex-col gap-4 w-full max-w-[240px]">
              <Button variant="outline" onClick={toggleMobileMenu}>
                Log In
              </Button>
              <Button onClick={toggleMobileMenu}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
