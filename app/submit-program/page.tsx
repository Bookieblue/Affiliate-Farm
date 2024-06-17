"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <section className="max-container padding-container mt-28 ">
      <div className="px-5">
        <div>
          <p className="font-bold text-[34px] text-cream-50 mb-3">
            Submit brand program
          </p>
          <p className="regular-16 text-cream-20 w-[68%]">
            Get your brand affiliate program on Affiliate farm and attract
            attention of bloggers, content creator, and YouTubers shopping for
            new offers to promote and drive significant credibility and traffic
            to your brand product massively.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="bg-gray-40 border rounded-lg border-gray-20 p-6">
            <p className="regular-16 text-cream-20 mb-3">FREE PLAN</p>
            <div className="flexBetween gap-y-36 flex-col">
              <ul className="text-cream-20 regular-16 mb-5">
                <li className="list-disc">List your brand program for free</li>
                <li className="list-disc">Get exposure to content creators</li>
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => router.push("/submit-program-form")}
              >
                Submit For Free
              </Button>
            </div>
          </div>
          <div className="bg-gray-40 border rounded-lg border-gray-20 p-6">
            <p className="regular-16 text-cream-20 mb-3">PREMIUM PLAN</p>
            <div className="flexBetween flex-col">
              <ul className="text-cream-20 list-disc ml-6 regular-16 mb-5">
                <li className="list-disc">
                  List your brand program & get exposure to massive content
                  creators
                </li>
                <li className="list-disc">
                  Get featured on all pages with verified tag
                </li>
                <li className="list-disc">
                  Get featured on all our social media{" "}
                </li>
                <li className="list-disc">
                  Get featured on our newsletter outreach
                </li>
                <li className="list-disc">Partnership announcement badge</li>
              </ul>
              <Button
                className="w-full"
                onClick={() => router.push("/featured-ad")}
              >
                Learn More
              </Button>
            </div>
          </div>
          <div>
            <p className="text-cream-50 meium-20">Have question?</p>
            <p className="mt-5 text-cream-20 regular-16">
              Contact us to ask us any question concerning our sponsor program,
              or feedback for us, You can mail us{" "}
              <Link href="/" className="text-yellow-50 underline">
                support@affiliatefarm.xyz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
