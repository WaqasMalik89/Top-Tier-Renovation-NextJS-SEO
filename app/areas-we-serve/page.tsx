import Head from "next/head";
import AreasWeServeSection from "@/components/AreasWeServeSection";

export default function AreasWeServePage() {
  return (
    <>
      <Head>
        <title>Areas We Serve | Top Tier Renovation</title>
        <meta
          name="description"
          content="We proudly serve Toronto, Brampton, Mississauga, Milton, Guelph, Vaughan, and more GTA areas."
        />
      </Head>
      <AreasWeServeSection />
    </>
  );
}
