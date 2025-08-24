import './globals.css';
import './uniform-portfolio-images.css';
import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import siteConfig from '../config/siteConfig';
import JsonLdServer from '../components/JsonLdServer';
import jsonLd from '../data/jsonLdData';

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [siteConfig.ogImage],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 
  return (
    <html lang="en">
      <body>
      <JsonLdServer data={jsonLd} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}