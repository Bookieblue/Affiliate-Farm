"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Programs from "./Programs";
import { Button } from "./ui/button";
import Link from "next/link";
import NestedDialog from "./ui/FormField/NestedDialog";
import { useRouter } from "next/navigation";

const PreviewSubmission = () => {

    const router = useRouter();

    const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  
    const handleFormSubmit = (values: any) => {
      console.log('Form Submitted:', values);

      setIsSuccessDialogOpen(true);
      // You can also perform navigation or other actions here
    };
  return (
    <div className="bg-gray-40 p-3 lg:p-6 h-fit rounded-lg ">
      <div className="flex items-center mb-3 gap-2">
        <Link href='/submit-program-form'>
        <ChevronLeft className="6 text-cream-50" />
        </Link>
        <p className="bold-24 text-cream-50">Preview submission</p>
      </div>
      <p className="text-cream-20 regular-16 ml-1">
        Get your brand expose to massive traffic from Affiliate Farm.
      </p>
      <div className="flexCenter w-full">
        <div className="lg:w-[70%] bg-black-60 rounded-xl h-fit mt-7">
        <Programs />
        </div>
      </div>
      <div className="regular-14 break-words lg:regular-16 grid grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <div>
          <p className="text-cream-50">Affiliate type</p>
          <p className="text-cream-20">Network</p>
        </div>
        <div>
          <p className="text-cream-50">Payment method</p>
          <p className="text-cream-20">Payoneer</p>
        </div>
        <div>
          <p className="text-cream-50">Publisher name</p>
          <p className="text-cream-20">Johnson Peter</p>
        </div>
        <div>
          <p className="text-cream-50">Product usage</p>
          <p className="text-cream-20">Beginner</p>
        </div>
        <div>
          <p className="text-cream-50">Eligible </p>
          <p className="text-cream-20">All with website</p>
        </div>
        <div>
          <p className="text-cream-50">Publisher email</p>
          <p className="text-cream-20">Johnson124@gmail.com</p>
        </div>
      </div>
      <Button className="w-full mt-10" onClick={handleFormSubmit}>Submit Affiliate Program</Button>
      <NestedDialog
            isOpen={isSuccessDialogOpen}
            onClose={() => setIsSuccessDialogOpen(false)}
            title="Affiliate program submitted"
            description="Your brand will to start benefitting from massive exposure and a quickly affiliate program spread though our targeted outreach to content creators"
          >
            <Button className="w-full mt-3"    onClick={() => router.push("/featured-ad")}>Promote Affiliate Program</Button>
            <Button variant='outline' className="w-full bg-[#C2BDB9]"   onClick={() => router.push("/")} >Go To Homepage</Button>
      </NestedDialog>
    </div>
  );
};

export default PreviewSubmission;
