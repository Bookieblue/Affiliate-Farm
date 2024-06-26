import AffliatePrograms from "@/components/AffliatePrograms";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/NavBar";
import OtherAffliate from "@/components/OtherAffliate";
import Programs from "@/components/Programs";
import SideBar from "@/components/SideBar";
import React from "react";






const Home: React.FC = () => {
  return (
    <div className="max-container hide-scrollbar">
      <nav>
      <Navbar />
      </nav>
      <div className="min-h-screen grid lg:grid-rows-[auto,1fr] lg:grid-cols-[250px,1fr]">
        <div className="row-span-1 col-span-1 hidden lg:block">
          <SideBar />
        </div>
        <div className="row-span-1 col-span-1">
          <Hero />
          <AffliatePrograms />
          <OtherAffliate />
          <Faq />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
