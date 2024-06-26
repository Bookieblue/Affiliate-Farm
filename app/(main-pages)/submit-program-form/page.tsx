import SubmitProgramForm from "@/components/forms/submitProgram";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="max-container padding-container mt-20 flexCenter flex-col md:w-[60%]">
      <SubmitProgramForm />
      <div className="mt-10">
        <p className="text-cream-50 medium-20">Have question?</p>
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
