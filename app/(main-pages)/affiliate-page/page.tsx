import AffliatePrograms from "@/components/AffliatePrograms";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import AffiliatePageLayout from "@/components/layout/homepage";
import OtherAffliate from "@/components/OtherAffliate";
import React from "react";
import Navbar from "@/components/NavBar";
import SideBar from "@/components/SideBar";

const page: React.FC = () => {
  return (
    <div className="hide-scrollbar w-full">
      <Navbar />
      <div className="min-h-screen max-container w-full lg:grid-cols-[250px,1fr] grid ">
        <div className="row-span-1 col-span-1 hidden lg:block ">
          <SideBar />
        </div>
        <div className="row-span-1 col-span-1 ">
          <Hero />
          <AffliatePrograms />
          <OtherAffliate />
          <Faq />
        </div>
      </div>
    </div>
  );
};

export default page;
