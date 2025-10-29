import "./globals.css";

export const metadata = {
  title: "Top Tier Renovation - Old Domain",
  description: "This page has been moved to the official site.",
  robots: "index, follow", // optional: prevents indexing but allows link signals
  alternates: {
    canonical: "https://www.canvasbuilds.ca/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}