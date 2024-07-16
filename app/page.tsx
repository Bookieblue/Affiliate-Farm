import AffliatePrograms from "@/components/AffliatePrograms";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AffiliatePageLayout from "@/components/layout/homepage";
import React from "react";




const Home: React.FC = () => {
  return (
    <AffiliatePageLayout>
       <Hero
        title="200+ Best Affiliate programs as at Jan, 2024"
        description="Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cash out massively in 2024."
      />
      <AffliatePrograms />

    </AffiliatePageLayout>
  );
};

export default Home;
