"use client";
import React, { useState, FormEvent } from "react";
import { Button } from "../ui/button";
import TextInput from "../ui/FormField/TextInput";
import SelectInput from "../ui/FormField/SelectInput";
import { useForm, FormProvider } from 'react-hook-form';
import {
  AFFLIATE_TYPE,
  ALL_LEVELS,
  COMMISSION_TYPE,
  PAYMENT_METHOD,
} from "@/constant";
import TextareaInput from "../ui/FormField/TextareaInput";
import  RadioGroupForm  from "../ui/FormField/RadioButton";
import Image from "next/image";

const SubmitProgramForm = () => {
  const methods = useForm(); // initialize useForm
  const [formData, setFormData] = useState({
    publisher_email: "",
    password: "",
    brand_name: "",
    payout_fee: "",
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
    commission_rate: "",
    logo: "",
  });

  const [formErrors, setFormErrors] = useState({
    publisher_email: "",
    password: "",
    brand_name: "",
    payout_fee: "",
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
    commission_rate: "",
    logo: "",
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

  const [rate, setRate] = useState<string>("");
  const [logo, setLogo] = useState<string | ArrayBuffer | null>(null);
  const [previewData, setPreviewData] = useState<null | {
    src: string;
    commission: string;
    name: string;
    productDescription: string;
    payout: string;
    cookie: string;
    programDescription: string;
    url: string;
    programID: string;
    linkName: string;
    verified: boolean;
    verifiedIconSrc: string;
  }>(null);

 
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(`Changed ${name} to ${value}`);
  };



  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
    console.log(`Changed ${name} to ${value}`);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
        setFormData({ ...formData, logo: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let errors = { ...formErrors };

    if (!formData.publisher_email) {
      errors.publisher_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.publisher_email)) {
      errors.publisher_email = "Incorrect email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!formData.brand_name) errors.brand_name = "Brand name is required";
    if (!formData.payout_fee) errors.payout_fee = "Payout fee is required";
    if (!formData.cookie_duration) errors.cookie_duration = "Cookie duration is required";
    if (!formData.publisher_name) errors.publisher_name = "Publisher name is required";
    if (!formData.Affiliates) errors.Affiliates = "Brand niche is required";
    if (!formData.commissions) errors.commissions = "Commission Type is required";
    if (!formData.payments) errors.payments = "Payment Method is required";
    if (!formData.Cookie_expired) errors.Cookie_expired = "Cookie expiration is required";
    if (!formData.program_url) {
      errors.program_url = "URL is required";
    } else if (!/^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/.test(formData.program_url)) {
      errors.program_url = "Invalid URL";
    }
    if (!formData.description) errors.description = "Product description is required";
    if (!formData.program_description) errors.program_description = "Program description is required";
    if (!formData.levels) errors.levels = "Affiliates Levels are required";
    if (!rate) {
      errors.commission_rate = "Commission rate is required";
    } else if (isNaN(Number(rate)) || Number(rate) <= 0) {
      errors.commission_rate = "Commission rate must be a positive number";
    }

    setFormErrors(errors);

    return Object.values(errors).every((error) => !error);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setPreviewData({
      src: logo as string,
      commission: rate,
      name: formData.brand_name,
      productDescription: formData.description,
      payout: formData.payout_fee,
      cookie: formData.cookie_duration,
      programDescription: formData.program_description,
      url: formData.program_url,
      programID: formData.publisher_email,
      linkName: "Learn More",
      verified: true,
      verifiedIconSrc: "/verified-icon.png",
    });

    console.log("Preview Data:", previewData);
  };

  return (
    <FormProvider {...methods}>
    <div className="bg-gray-40 p-6 h-fit rounded-lg">
      <p className="bold-24 text-cream-50 mb-3">
        Submit brand affiliate program
      </p>
      <p className="regular-16 text-cream-20">
        Get your brand exposed to massive traffic from Affiliate Farm.
      </p>
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
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
          {formErrors.logo && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.logo}</p>
          )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <TextInput
            name="brand_name"
            label="Brand Name"
            placeholder="eg. Jasper AI"
            type="text"
            value={formData.brand_name}
            onChange={handleInputChange}
          />
          {formErrors.brand_name && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.brand_name}</p>
          )}
          <SelectInput
            name="Affiliates"
            label="Brand niche"
            options={Affiliates}
            placeholder="Travel affiliate program"
            value={formData.Affiliates}
            onChange={(value) => handleSelectChange("Affiliates", value)}
          />
          {formErrors.Affiliates && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.Affiliates}</p>
          )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <div className="w-full">
            <label className="text-cream-50 regular-16">
              Commission Rate
            </label>
            <div className="flex items-center overflow-hidden mt-2">
              <select className="px-3 py-2 bg-gray-20 text-cream-50 outline-none">
                <option value="%">%</option>
                <option value="$">$</option>
                <option value="€">€</option>
                <option value="£">£</option>
              </select>
              <input
                type="number"
                className="w-full px-4 py-2 bg-gray-40 text-cream-20 outline-none"
                placeholder="10.5"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            {formErrors.commission_rate && (
              <p className="text-red-500 mt-2 text-sm">{formErrors.commission_rate}</p>
            )}
          </div>
          <SelectInput
            name="commissions"
            label="Commission Type"
            options={Commissions}
            placeholder="Commission Type"
            value={formData.commissions}
            onChange={(value) => handleSelectChange("commissions", value)}
          />
          {formErrors.commissions && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.commissions}</p>
          )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <TextInput
            name="payout_fee"
            label="Payout fee"
            placeholder="eg $50"
            type="text"
            value={formData.payout_fee}
            onChange={handleInputChange}
          />
          {formErrors.payout_fee && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.payout_fee}</p>
          )}
          <SelectInput
            name="payments"
            label="Payment Method"
            options={Payments}
            placeholder="Payment Method"
            value={formData.payments}
            onChange={(value) => handleSelectChange("payments", value)}
          />
          {formErrors.payments && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.payments}</p>
          )}
        </div>
        <div>
          <RadioGroupForm
            name="Cookie_expired"
            label="Cookie expired?"
            value={formData.Cookie_expired}
            onChange={(value: string) => handleSelectChange("Cookie_expired", value)}
          />
          {formErrors.Cookie_expired && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.Cookie_expired}</p>
          )}
        </div>
        <div className="lg:w-[40%] flex-col lg:flex-row">
          <TextInput
            name="cookie_duration"
            label="Cookie duration"
            placeholder="eg. 60 days"
            type="text"
            value={formData.cookie_duration}
            onChange={handleInputChange}
          />
          {formErrors.cookie_duration && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.cookie_duration}</p>
          )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <TextInput
            name="program_url"
            label="Affiliate program URL"
            placeholder="eg. jasper-ai/affiliate-program"
            type="text"
            value={formData.program_url}
            onChange={handleInputChange}
          />
          {formErrors.program_url && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.program_url}</p>
          )}
          <TextInput
            name="description"
            label="Short product description"
            placeholder="eg. Content writing tool"
            type="text"
            value={formData.description}
            onChange={handleInputChange}
          />
          {formErrors.description && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.description}</p>
          )}
        </div>
        <div>
          <TextareaInput
            name="program_description"
            label="Program description"
            placeholder="eg. With jasper user can start creating massive blog, ebook, music , etc contents with AI."
            value={formData.program_description}
            onChange={(e) => setFormData({ ...formData, program_description: e.target.value })}
            className="h-40 text-cream-20"
          />
          {formErrors.program_description && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.program_description}</p>
          )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <SelectInput
            name="Affiliates"
            label="Affiliates Type"
            options={Affiliates}
            placeholder="All Affiliates Type"
            value={formData.Affiliates}
            onChange={(value) => handleSelectChange("Affiliates", value)}
          />
          {formErrors.Affiliates && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.Affiliates}</p>
          )}
          <SelectInput
            name="levels"
            label="Affiliates Levels"
            options={Levels}
            placeholder="All levels"
            value={formData.levels}
            onChange={(value) => handleSelectChange("levels", value)}
          />
          {formErrors.levels && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.levels}</p>
          )}
        </div>
        <div className="flex gap-10 flex-col lg:flex-row">
          <TextInput
            name="publisher_name"
            label="Publisher name"
            placeholder="eg. John Don"
            type="text"
            value={formData.publisher_name}
            onChange={handleInputChange}
          />
          {formErrors.publisher_name && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.publisher_name}</p>
          )}
          <TextInput
            name="publisher_email"
            label="Publisher email"
            placeholder="eg. yourname@gmail.com"
            type="email"
            value={formData.publisher_email}
            onChange={handleInputChange}
          />
          {formErrors.publisher_email && (
            <p className="text-red-500 mt-2 text-sm">{formErrors.publisher_email}</p>
          )}
        </div>
        <div className="w-full">
          <Button type="submit" className="w-full">
            Proceed
          </Button>
        </div>
      </form>
      {previewData && (
        <div className="mt-10">
          <h2 className="text-white text-xl">Preview:</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img src={previewData.src} alt="Logo" className="h-16 mb-4" />
            <p><strong>Brand Name:</strong> {previewData.name}</p>
            <p><strong>Product Description:</strong> {previewData.productDescription}</p>
            <p><strong>Commission Rate:</strong> {previewData.commission}</p>
            <p><strong>Payout Fee:</strong> {previewData.payout}</p>
            <p><strong>Cookie Duration:</strong> {previewData.cookie}</p>
            <p><strong>Program Description:</strong> {previewData.programDescription}</p>
            <p><strong>Program URL:</strong> {previewData.url}</p>
            <p><strong>Publisher Email:</strong> {previewData.programID}</p>
            <p><strong>Verified:</strong> {previewData.verified ? "Yes" : "No"}</p>
            <img src={previewData.verifiedIconSrc} alt="Verified Icon" className="h-6 mt-2" />
          </div>
        </div>
      )}
    </div>
    </FormProvider>
  );
};

export default SubmitProgramForm;
