import AffliatePrograms from '@/components/AffliatePrograms';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import OtherAffliate from '@/components/OtherAffliate';
import SideBar from '@/components/SideBar';
import React from 'react';


const Home: React.FC = () => {
  return (
    <div className='max-container hide-scrollbar'>
         <div className="min-h-screen grid grid-rows-[auto,1fr] grid-cols-[250px,1fr]">      
      {/* Sidebar */}
      <div className="row-span-1 col-span-1">
         <SideBar/>
      </div>

      {/* Content */}
      <div className="row-span-1 col-span-1">
        <Hero />
        <AffliatePrograms />
        <OtherAffliate />
        <Faq />
      </div>
    </div>
    </div>
  );
};

export default Home;


