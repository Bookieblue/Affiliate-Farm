"use client";
import React, { useState } from "react";
import { Form, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import TextInput from "../ui/FormField/TextInput/index";
import SelectInput from "../ui/FormField/SelectInput";
import {
  AFFLIATE_TYPE,
  ALL_LEVELS,
  COMMISSION_TYPE,
  PAYMENT_METHOD,
} from "@/constant";
import TextareaInput from "../ui/FormField/TextareaInput";
import { RadioGroupForm } from "../ui/FormField/RadioButton";
import Image from "next/image";
import Programs from "../Programs";


const SubmitProgramSchema = z.object({
  publisher_email: z
    .string()
    .min(1, "Email is required")
    .email("Incorrect email address"),
  password: z.string().min(8, "Password is required"),
  brand_name: z.string().min(1, "Brand name is required"),
  payout_fee: z.string().min(1, "Payout fee is required"),
  cookie_duration: z.string().min(1, "Cookie duration is required"),
  publisher_name: z.string().min(1, "Publisher name is required"),
  Affiliates: z.string().min(1, "Brand niche is required"),
  commissions: z.string().min(1, "Commission Type is required"),
  payments: z.string().min(1, "Payment Method is required"),
  Cookie_expired: z.string().min(1, "Cookie expiration is required"),
  program_url: z.string().url("Invalid URL"),
  description: z.string().min(1, "Product description is required"),
  program_description: z.string().min(1, "Program description is required"),
  levels: z.string().min(1, "Affiliates Levels are required"),
  commission_rate: z.number().positive("Commission rate must be a positive number"),
  logo: z.string().nonempty("Logo is required"),
});

const SubmitProgramForm = () => {
  const form = useForm<z.infer<typeof SubmitProgramSchema>>({
    resolver: zodResolver(SubmitProgramSchema),
    defaultValues: {
      brand_name: "",
      payout_fee: "",
      publisher_email: "",
      password: "",
      cookie_duration: "",
      publisher_name: "",
      Affiliates: "",
      commissions: "",
      payments: "",
      Cookie_expired: "",
      program_url: "",
      description: "",
      program_description: "",
      levels: "",
      commission_rate: 0,
      logo: "",
    },
  });

  const Affiliates = AFFLIATE_TYPE.map((affiliate) => ({
    label: affiliate.name,
    value: affiliate.name,
  }));

  const Commissions = COMMISSION_TYPE.map((commission) => ({
    label: commission.name,
    value: commission.name,
  }));

  const Levels = ALL_LEVELS.map((level) => ({
    label: level.name,
    value: level.name,
  }));

  const Payments = PAYMENT_METHOD.map((payment) => ({
    label: payment.name,
    value: payment.name,
  }));

  const [rate, setRate] = useState<number | string>("");
  const [logo, setLogo] = useState<string | ArrayBuffer | null>(null);
  const [previewData, setPreviewData] = useState(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
        form.setValue("logo", reader.result as string); // Set the logo value in the form
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (values: z.infer<typeof SubmitProgramSchema>) => {
    if (!logo) {
      form.setError("logo", { type: "manual", message: "Logo is required" });
      return;
    }

    if (typeof rate !== "number" || rate <= 0) {
      form.setError("commission_rate", { type: "manual", message: "Commission rate must be a positive number" });
      return;
    }

    setPreviewData({
      src: logo as string,
      commission: rate,
      name: values.brand_name,
      productDescription: values.description,
      payout: values.payout_fee,
      cookie: values.cookie_duration,
      programDescription: values.program_description,
      url: values.program_url,
      programID: values.publisher_email, // or any unique ID you prefer
      linkName: "Learn More",
      verified: true, // Or any logic to determine if it's verified
      verifiedIconSrc: "/verified-icon.png", // Replace with your verified icon path
    });
  };

  return (
    <div className="bg-gray-40 p-6 h-fit rounded-lg">
    <p className="bold-24 text-cream-50 mb-3">
      Submit brand affiliate program
    </p>
    <p className="regular-16 text-cream-20">
      Get your brand expose to massive traffic from Affiliate Farm.
    </p>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-10 space-y-6"
      >
        <div className="flex flex-col ">
          <label className="text-white mb-2">Brand Logo</label>
          <div className="flex items-center">
            <div className="w-24 h-24 border border-gray-20 rounded-lg overflow-hidden flex items-center justify-center bg-none">
              {logo ? (
                <Image
                  src={logo as string}
                  width={20}
                  height={30}
                  alt="Logo Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src="/logo-preview.svg"
                  width={20}
                  height={30}
                  alt=""
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <label className="ml-4 bg-transparent border mt-10 border-gray-20 text-cream-50 px-4 py-2 rounded-lg cursor-pointer">
              Upload Favicon
              <input
                type="file"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          {form.formState.errors.logo && (
              <p className="text-red-500 mt-2 text-sm">{form.formState.errors.logo.message}</p>
            )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="brand_name"
            label="Brand Name"
            placeholder="eg. Jasper AI"
            type="text"
          />
          <SelectInput
            control={form.control}
            name="Affiliates"
            label="Brand niche"
            options={Affiliates}
            placeholder="Travel affiliate program"
          />
        </div>
        <div className="flex gap-10  flex-col lg:flex-row">
          <div className="w-full">
            <FormLabel className="text-cream-50 regular-16">
              Commision Rate
            </FormLabel>
            <div className="flex items-center overflow-hidden mt-2 ">
              <select className="px-3 py-2 bg-gray-20 text-cream-50 outline-none">
                <option value="%">%</option>
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="£">£</option>
              </select>
              <input
                type="number"
                className="w-full px-3 py-2 bg-transparent border border-gray-20 rounded-md text-cream-50 placeholder-gray-10 outline-none"
                placeholder="eg. 25"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            {form.formState.errors.commission_rate && (
                <p className="text-red-500 mt-2 text-sm">{form.formState.errors.commission_rate.message}</p>
              )}
          </div>

          <SelectInput
            control={form.control}
            name="commissions"
            label="Commission Type"
            options={Commissions}
            placeholder="Commission Type"
          />
        </div>
        <div className="flex gap-10  flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="payout_fee"
            label="Payout fee"
            placeholder="eg $50"
            type="text"
          />
          <SelectInput
            control={form.control}
            name="payments"
            label="Payment Method"
            options={Payments}
            placeholder="Payment Method"
          />
        </div>
        <div>
          <RadioGroupForm
            control={form.control}
            label="Cookie expired?"
            name="Cookie_expired"
          />
        </div>
        <div className="lg:w-[40%]  flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="cookie_duration"
            label="Cookie duration"
            placeholder="eg. 60 days"
            type="text"
          />
        </div>
        <div className="flex gap-10  flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="program_url"
            label="Affiliate program URL"
            placeholder="eg. jasper-ai/affiliate-program"
            type="text"
          />
          <TextInput
            control={form.control}
            name="description"
            label="Short product description"
            placeholder="eg. Content writing tool"
            type="text"
          />
        </div>
        <div>
          <TextareaInput
            control={form.control}
            name="program_description"
            label="Program description"
            placeholder="eg. With jasper user can start creating massive blog, ebook, music , etc contents with AI."
            className="h-40"
          />
        </div>
        <div className="flex gap-10  flex-col lg:flex-row">
          <SelectInput
            name="Affiliates"
            label="Affiliates Type"
            options={Affiliates}
            placeholder="All Affiliates Type"
          />
          <SelectInput
            control={form.control}
            name="levels"
            label="Affiliates Levels"
            options={Levels}
            placeholder="All levels"
          />
        </div>
        <div className="flex gap-10  flex-col lg:flex-row">
          <TextInput
            control={form.control}
            name="publisher_name"
            label="Publisher name"
            placeholder="eg. John Don"
            type="text"
          />
          <TextInput
            control={form.control}
            name="publisher_email"
            label="Publisher email"
            placeholder="eg. yourname@gmail.com"
            type="email"
          />
        </div>
        <div className="w-full ">
          <Button
            type="submit"
            className="w-full"
            // onClick={() => router.push("/preview-submission")}
          >
            Proceed
          </Button>
        </div>
      </form>
    </Form>
     {previewData && (
        <div className="mt-10">
          <h2 className="text-cream-50 bold-24 mb-4">Preview</h2>
          <Programs {...previewData} />
        </div>
      )}
  </div>   
  );
};

export default SubmitProgramForm;
