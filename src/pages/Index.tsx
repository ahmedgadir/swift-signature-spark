
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { initAnimationObservers } from '@/lib/animations';
import { Helmet } from 'react-helmet';

const Index = () => {
  useEffect(() => {
    const cleanup = initAnimationObservers();
    return cleanup;
  }, []);

  return (
    <>
      <Helmet>
        <title>Sign in Seconds | E-Signature Tool for Small Businesses</title>
        <meta name="description" content="Sign in Seconds is a modern e-signature tool designed for small businesses. Get documents signed quickly and securely with our intuitive platform." />
        <meta name="keywords" content="e-signature, digital signature, document signing, small business, electronic signature, online signing" />
        <meta property="og:title" content="Sign in Seconds | E-Signature Tool for Small Businesses" />
        <meta property="og:description" content="Get documents signed quickly and securely with our intuitive e-signature platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://signineconds.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sign in Seconds | E-Signature Tool for Small Businesses" />
        <meta name="twitter:description" content="Get documents signed quickly and securely with our intuitive e-signature platform." />
        <link rel="canonical" href="https://signineconds.com" />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <Pricing />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
