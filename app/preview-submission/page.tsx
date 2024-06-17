import PreviewSubmission from "@/components/PreviewSubmission";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className=" mt-20 max-container padding-container flexCenter flex-col w-[60%]">
      <PreviewSubmission />
      <div className="mt-10">
        <p className="text-cream-50 meium-20">Have question?</p>
        <p className="mt-5 text-cream-20 regular-16">
          Contact us to ask us any question concerning our sponsor program, or
          feedback for us, You can mail us{" "}
          <Link href="/" className="text-yellow-50 underline">
            support@affiliatefarm.xyz
          </Link> 
        </p>
      </div>
    </section>
  );
};

export default page;
