'use client';

import Head from 'next/head';
import Script from 'next/script';

import HeroCarousel from '../components/HeroBannerCarousel';
import Navigation from '../components/MainNavigation';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        {/* (Put your full SEO meta tags & JSON-LD here as before) */}
        <title>Top Tier Renovation Services | Landscaping in GTA</title>
        <meta
          name="description"
          content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/" />
        {/* ...other meta tags & JSON-LD */}
      </Head>

      <HeroCarousel />

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />

      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
