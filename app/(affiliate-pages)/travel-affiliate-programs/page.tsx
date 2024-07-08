import AffliatePrograms from "@/components/AffliatePrograms";
import Hero from "@/components/Hero";
import React from "react";
import Layout from "../layout";

const Page: React.FC = () => {
  return (
    <Layout>
       <Hero
        title="10+ Best Travel Affiliate programs as at Jan, 2024"
        description="Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in 2024."
      />
      <AffliatePrograms />
    </Layout>
  );
};

export default Page;