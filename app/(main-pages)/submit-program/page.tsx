"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MainDialog from "@/components/ui/FormField/MainDialog";
import NestedDialog from "@/components/ui/FormField/NestedDialog";
import FeaturedAdForm from "@/components/forms/featuredAd";
import { Button } from "@/components/ui/button";
import { useCreateAds } from "@/services/models/hooks/ads/hook";
import { set } from "zod";

const Page = () => {
  const router = useRouter();
  const [isMainDialogOpen, setIsMainDialogOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [data, setData] = useState();

  const { data: AdsData, isPending, isSuccess, mutate } = useCreateAds(data);

  useEffect(() => {
    if (data) mutate();
  }, [data, mutate]);

  useEffect(() => {
    if (isSuccess) {
      // Close main dialog and open success dialog
      setIsMainDialogOpen(false);
      setIsSuccessDialogOpen(true);
      // You can also perform navigation or other actions here
    }
  }, [isSuccess]);

  const handleFormSubmit = (values: any) => {
    console.log("Form Submitted:", values);
    const program = values["program_ID"];
    const fullname = values["name"];
    delete values["program_ID"];
    delete values["name"];
    setData({ ...values, program, fullname });
  };
  return (
    <section className="mx-auto max-w-[1700px] padding-container mt-28 w-full mb-10 ">
      <div className="lg:px-5">
        <div>
          <p className="font-bold text-[34px] text-cream-50 mb-3">
            Submit brand program
          </p>
          <p className="regular-16 text-cream-20 w-full lg:w-[68%]">
            Get your brand affiliate program on Affiliate Base and attract
            attention of bloggers, content creator, and YouTubers shopping for
            new offers to promote and drive significant credibility and traffic
            to your brand product massively.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
          <div className="bg-gray-40 border rounded-lg border-gray-20 p-6">
            <p className="regular-16 text-cream-20 mb-3">FREE PLAN</p>
            <div className="">
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
            <div className="">
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
              <div className="mt-5 flexCenter w-full">
                <MainDialog
                  title="Buy feature ad space"
                  description="By opting into our feature ad plan, you'll maximize your brand's affiliate program visibility, credibility, and reach."
                  isOpen={isMainDialogOpen}
                  onOpenChange={() => setIsMainDialogOpen(false)}
                  onClick={() => setIsMainDialogOpen(true)}
                  buttonName="Subscribe now"
                >
                  <FeaturedAdForm onSubmit={handleFormSubmit} />
                </MainDialog>
                <NestedDialog
                  isOpen={isSuccessDialogOpen}
                  onClose={() => setIsSuccessDialogOpen(false)}
                  title="Brand Affiliate program on Campaign now"
                  description="Your brand will start benefitting from massive exposure and a quickly affiliate program spread though our targeted outreach to content creators."
                >
                  <Button
                    className="w-full mt-3"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    Go back now
                  </Button>
                  <p className="text-center regular-16 text-cream-50 mt-3">
                    Feature ad activated now.
                  </p>
                </NestedDialog>
              </div>
              <Button
                variant="secondary"
                className="w-full mt-4"
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
              <Link
                href="mailto:support@affilatebase.xyz"
                target="_blank"
                className="text-yellow-50 underline"
              >
                support@affiliatebase.xyz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
