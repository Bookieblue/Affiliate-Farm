"use client";
import React, { useState } from "react";
import { Form, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import TextInput from "../ui/FormField/TextInput/index";
import { useRouter } from "next/navigation";
import SelectInput from "../ui/FormField/SelectInput";
import {
  AFFLIATE_TYPE,
  ALL_LEVELS,
  COMMISSION_TYPE,
  PAYMENT_METHOD,
} from "@/constant";
import TextareaInput from "../ui/FormField/TextareaInput";
import { CheckBox } from "../ui/FormField/CheckBox";


const SubmitProgramSchema = z.object({
  publisher_email: z
    .string()
    .min(1, "Email is required")
    .email("Incorrect email address"),
  password: z.string().min(8, "Password is required"),
  brand_name: z.string().min(8, "Password is required"),
  payout_fee: z.string().min(8, "Password is required"),
  cookie_duration:z.string().min(8, "Password is required"),
  publisher_name:z.string().min(8, "Password is required"),
});

const SubmitProgramForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof SubmitProgramSchema>>({
    resolver: zodResolver(SubmitProgramSchema),
    defaultValues: {
      brand_name: "",
      payout_fee: "",
      publisher_email: "",
      password: "",
      cookie_duration:"",
      publisher_name:"",
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

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: z.infer<typeof SubmitProgramSchema>) => {
    setIsLoading(true);
   
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
            <TextInput
              control={form.control}
              name="brand_name"
              label="Brand Name"
              placeholder="eg. Jasper AI"
              type="text"
            />
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
            <FormLabel htmlFor="cookie_expired" className="text-cream-50">
              Cookies expried?
            </FormLabel>
            <div className="flex gap-4 mt-2  flex-col lg:flex-row">
              <CheckBox
                control={form.control}
                name="yes"
                label="yes"
              />
              <CheckBox
                control={form.control}
                name="no"
                label="no"
              />
            </div>
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
            <Button type="submit" className="w-full" onClick={() => router.push("/preview-submission")}>
              Proceed
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SubmitProgramForm;
