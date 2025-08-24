export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    keywords: string[];
    author: string;
    url: string;
    ogImage: string;
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
    description: "Transform your home and outdoor spaces with premium landscaping, renovation, and remodeling services across Toronto, Mississauga, Brampton, Vaughan, and the GTA.",
    keywords: [
      "home renovation", 
      "landscaping services", 
      "GTA renovation", 
      "garden design", 
      "outdoor remodeling", 
      "Toronto renovation", 
      "home improvement GTA", 
      "patio construction",
      "Lights"
  ],
    author: "Waqas Malik",
    url: "https://www.toptier-renovation.com",
    ogImage: "/og-image.jpg",
  
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
  