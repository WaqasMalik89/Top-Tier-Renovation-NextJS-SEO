import Head from 'next/head';  // Import component to manage the <head> section of the HTML page (for SEO/meta tags)
import Script from 'next/script';  // Import component to load external scripts in an optimized way

// These components mostly render static content or server-side rendered content
import Services from '../components/Services';  // Shows the list of services offered
import Portfolio from '../components/Portfolio';  // Displays past projects or portfolio items
import Testimonials from '../components/Testimonials';  // Shows customer reviews or testimonials

// These components need client-side JavaScript to work (e.g., sliders, forms)
import HeroCarousel from '../components/HeroBannerCarousel';  // A sliding banner at the top of the homepage
import ContactForm from '../components/ContactForm';  // Form for visitors to send messages or inquiries

// The main component for the homepage
export default function Home() {
  return (
    <>
      {/* Setup the page's metadata for SEO and social sharing */}
      <Head>
        {/* Title shown on browser tab and search results */}
        <title>Top Tier Renovation Services | Landscaping in GTA</title>

        {/* Description shown in search results */}
        <meta
          name="description"
          content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas."
        />

        {/* Tell search engines to index and follow links on this page */}
        <meta name="robots" content="index, follow" />

        {/* The preferred URL of this page */}
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph tags for social media previews (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Top Tier Renovation Services | Landscaping in GTA" />
        <meta
          property="og:description"
          content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas."
        />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter Card tags for Twitter previews */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Tier Renovation Services | Landscaping in GTA" />
        <meta
          name="twitter:description"
          content="Transform your outdoor space with premium landscaping and renovation services across GTA and nearby areas."
        />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.jpg" />
      </Head>

      {/* Render interactive hero banner carousel */}
      <HeroCarousel />

      {/* Main page content container with some padding and max width */}
      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
        {/* Section showing offered services */}
        <Services />
        {/* Section showing past portfolio projects */}
        <Portfolio />
        {/* Section showing customer testimonials */}
        <Testimonials />
        {/* Contact form so visitors can send messages */}
        <ContactForm />
      </main>

      {/* Load any additional JavaScript file after the page is interactive */}
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
