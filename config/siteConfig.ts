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
    name: "Top Tier Tenovation",
    title: "Top Tier Tenovation - Innovative Solutions for Your Business",
    description: "We provide cutting-edge services to help your business grow and thrive in the digital age.",
    keywords: ["innovation", "technology", "business solutions"],
    author: "Waqas Malik",
    url: "https://www.toptier-tenovation.com",
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
  