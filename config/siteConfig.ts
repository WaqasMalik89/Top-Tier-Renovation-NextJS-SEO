export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  keywords: string[];
  author: string;
  url: string;
  canonical: string;
  robots: string;
  og: {
    title: string;
    description: string;
    url: string;
    type: string;
    image: string;
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    image: string;
  };
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
}

const siteConfig: SiteConfig = {
  name: "Top Tier Renovation",
  title: "Top Tier Renovation Services | Landscaping & Home Improvements in GTA",
  description:
    "Transform your home and outdoor spaces with premium landscaping, renovation, and remodeling services across Toronto, Mississauga, Brampton, Vaughan, and the GTA.",
  keywords: [
    "top renovation",
    "home renovation GTA",
    "house remodeling Toronto",
    "kitchen renovation Toronto",
    "bathroom remodeling GTA",
    "basement finishing GTA",
    "home improvement Toronto",
    "residential renovation services",
    "exterior home renovation GTA",
    "interior remodeling Toronto",
    "landscaping services GTA",
    "garden design Toronto",
    "lawn care and landscaping GTA",
    "outdoor landscaping Toronto",
    "patio and deck construction GTA",
    "front yard landscaping Toronto",
    "backyard landscaping GTA",
    "hardscape design Toronto",
    "outdoor lighting installation GTA",
    "garden lights Toronto",
    "landscape lighting services GTA",
    "LED outdoor lighting Toronto",
    "patio lighting installation GTA",
    "yard lights and pathway lighting Toronto",
    "home renovation and landscaping GTA",
    "Toronto landscaping and renovation",
    "custom outdoor living spaces GTA",
    "exterior home improvements Toronto"
  ],
  author: "Waqas Malik",

  // 👇 Updated values to point to your live domain
  url: "https://www.canvasbuilds.ca/",
  canonical: "https://www.canvasbuilds.ca/",
  robots: "noindex, follow",

  og: {
    title: "Top Tier Renovation | Landscaping & Renovation in GTA",
    description:
      "Visit our main site at https://www.canvasbuilds.ca/ for premium landscaping and renovation services across the GTA.",
    url: "https://www.canvasbuilds.ca/",
    type: "website",
    image: "https://www.canvasbuilds.ca/og-image-logo6.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "Top Tier Renovation | Landscaping in GTA",
    description:
      "Visit our main site at https://www.canvasbuilds.ca/ for premium landscaping and renovation services across the GTA.",
    image: "https://www.canvasbuilds.ca/twitter-image.png",
  },

  address: {
    street: "123 Innovation Drive",
    city: "Toronto, ON",
    postalCode: "M1M 1M1",
    country: "Canada",
  },

  social: {
    instagram: "https://instagram.com/yourusername",
    facebook: "https://facebook.com/yourusername",
  },
};

export default siteConfig;
