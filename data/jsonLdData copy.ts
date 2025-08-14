const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://yourdomain.com#business",
      "name": "Top Tier Renovation Services",
      "image": "https://yourdomain.com/logo.png",
      "description": "Premium landscaping and renovation services across GTA and surrounding areas.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Renovation Street",
        "addressLocality": "Toronto",
        "addressRegion": "ON",
        "postalCode": "M1A 2B3",
        "addressCountry": "CA"
      },
      "telephone": "+1-647-299-9100",
      "email": "mail.waqas.malik@gmail.com",
      "url": "https://yourdomain.com",
      "sameAs": [
        "https://www.facebook.com/yourprofile",
        "https://www.instagram.com/yourprofile",
        "https://www.linkedin.com/in/yourprofile"
      ],
      "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
      "priceRange": "$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124"
      }
    },
    // ...other entities (Service, FAQPage)
  ];
  
  export default jsonLd;
  