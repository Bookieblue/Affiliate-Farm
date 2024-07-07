import AffliatePrograms from "@/components/AffliatePrograms";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AffiliatePageLayout from "@/components/layout/homepage";
import React from "react";

const Home: React.FC = () => {
  return (
    <AffiliatePageLayout>
      <Hero />
      <AffliatePrograms />
      <Footer />
    </AffiliatePageLayout>
  );
};

export default Home;
