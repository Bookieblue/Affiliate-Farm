import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { AFFLIATE_PROGRAMS_LINKS } from "@/constant";
import { ChevronRight } from "lucide-react";

const OtherAffliate = () => {
  return (
    <section className="max-container padding-container flexBetween flex-col lg:flex-row mt-32 w-full">
      <div className="lg:w-[50%]">
        <p className="font-[600px] text-cream-50 text-[34px]">
          Discover other affiliate programs
        </p>
        <p className="regular-20 mt-3 text-cream-20 ">
          Uncover other new affiliate programs across industries.
        </p>
        <div className="mt-5 grid grid-cols-2 grid-rows-4 w-full gap-5">
          {AFFLIATE_PROGRAMS_LINKS.map((link) => (
            <div className="flex" key={link.name}>
              <ChevronRight className="text-gray-10 size-4 mt-1" />
              <p className="text-gray-10 ">{link.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-yellow-50 px-6 py-12 rounded-xl border mt-10 lg:mt-0 lg:w-[50%] border-cream-20">
        <Image src="/broadcast.svg" alt="logo" width={70} height={29} />
        <p className="bold-24 text-black-50">
          Submit your brand affiliate program & get massive traffic daily.
        </p>
        <p className="regular-16 text-black-50 mt-4">
          Get direct access to vast network of motivated affiliates ready to
          promote your products and services to their engaged audiences.
        </p>
        <Button variant="secondary" className="w-full mt-5">
          Submit Affiliate Program
        </Button>
      </div>
    </section>
  );
};

export default OtherAffliate;
