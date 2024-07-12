"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import Programs from "./Program";
import { Button } from "./ui/button";
import Link from "next/link";
import NestedDialog from "./ui/FormField/NestedDialog";
import { useRouter } from "next/navigation";

const PreviewSubmission = () => {
  const router = useRouter();
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, any>>({});

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleFormSubmit = () => {
    setIsSuccessDialogOpen(true);
  };

  return (
    <div className="bg-gray-40 p-3 r lg:p-6 h-fit rounded-lg">
      <div className="flex items-center mb-3 gap-2">
        <Link href="/submit-program-form">
          <ChevronLeft className="6 text-cream-50" />
        </Link>
        <p className="bold-24 text-cream-50">Preview submission</p>
      </div>
      <p className="text-cream-20 regular-16 ml-1">
        Get your brand exposed to massive traffic from Affiliate Farm.
      </p>
      <div className="flexCenter w-full">
        <div className=" rounded-xl mt-7">
          <Programs
            src={formData.logo || ""}
            commission={formData.commission_rate || ""}
            name={formData.brand_name || ""}
            productDescription={formData.description || ""}
            payout={formData.payout_fee || ""}
            cookie={formData.cookie_duration || ""}
            programDescription={formData.program_description || ""}
            url={formData.program_url || ""}
            programID=""
            verifiedIconSrc=""
            linkName="View Program"
            verified={false}
          />
        </div>
      </div>
      <div className="regular-14 break-all w-full lg:regular-16 grid grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <div>
          <p className="text-cream-50">Affiliate niche</p>
          <p className="text-cream-20">{formData. category}</p>
        </div>
        <div>
          <p className="text-cream-50">Affiliate type</p>
          <p className="text-cream-20">{formData.affiliates}</p>
        </div>
        <div>
          <p className="text-cream-50">Payment method</p>
          <p className="text-cream-20">{formData.payments}</p>
        </div>
        <div>
          <p className="text-cream-50">Affiliate level</p>
          <p className="text-cream-20">{formData.levels}</p>
        </div>
        <div>
          <p className="text-cream-50">Publisher name</p>
          <p className="text-cream-20">{formData.publisher_name}</p>
        </div>
        <div>
          <p className="text-cream-50">Publisher email</p>
          <p className="text-cream-20">{formData.publisher_email}</p>
        </div>
      </div>
      <Button className="w-full mt-10" onClick={handleFormSubmit}>
        Submit Affiliate Program
      </Button>
      <NestedDialog
        isOpen={isSuccessDialogOpen}
        onClose={() => setIsSuccessDialogOpen(false)}
        title="Affiliate program submitted"
        description="Your brand will start benefitting from massive exposure and a quick affiliate program spread through our targeted outreach to content creators"
      >
        <Button
          className="w-full mt-3"
          onClick={() => router.push("/featured-ad")}
        >
          Promote Affiliate Program
        </Button>
        <Button
          variant="outline"
          className="w-full bg-[#C2BDB9]"
          onClick={() => router.push("/")}
        >
          Go To Homepage
        </Button>
      </NestedDialog>
    </div>
  );
};

export default PreviewSubmission;
