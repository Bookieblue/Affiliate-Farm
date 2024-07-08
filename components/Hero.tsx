// import React from "react";


// const Hero = () => {
//   return (
//     <section className="padding-container mt-28 lg:w-[65%]">
//         <h1 className="bold-40 lg:bold-54 text-cream-50 ">
//         200+ Best Affiliate programs as at Jan, 2024 
//         </h1>
//         <p className=" regular-16 pt-4 md:regular-20 leading-8 text-gray-10 ">
//         Discover 200+ curated highest paying affiliate programs that are perfect for your niche, content to cashout massively in 2024.
//         </p>
//     </section>
//   );
// };

// export default Hero;


import React from "react";

interface HeroProps {
  title: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <section className="padding-container mt-28 lg:w-[65%]">
      <h1 className="bold-40 lg:bold-54 text-cream-50">{title}</h1>
      <p className="regular-16 pt-4 md:regular-20 leading-8 text-gray-10">
        {description}
      </p>
    </section>
  );
};

export default Hero;

