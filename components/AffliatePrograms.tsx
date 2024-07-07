"use client";
import React, { useState, FormEvent } from "react";
import SelectInput from "./ui/FormField/SelectInput";
import {
  AFFLIATE_TYPE,
  ALL_LEVELS,
  COMMISSION_TYPE,
  PAYMENT_METHOD,
  TICKET_TYPE,
} from "../constant/index";
import Image from "next/image";
import LoadMoreComponent from "./LoadMoreComponent";

interface Option {
  label: string;
  value: string;
}

const Tickets: Option[] = TICKET_TYPE.map((ticket) => ({
  label: ticket.name,
  value: ticket.name,
}));

const Levels: Option[] = ALL_LEVELS.map((level) => ({
  label: level.name,
  value: level.name,
}));

const Payments: Option[] = PAYMENT_METHOD.map((payment) => ({
  label: payment.name,
  value: payment.name,
}));

const Affiliates: Option[] = AFFLIATE_TYPE.map((affiliate) => ({
  label: affiliate.name,
  value: affiliate.name,
}));

const Commissions: Option[] = COMMISSION_TYPE.map((commission) => ({
  label: commission.name,
  value: commission.name,
}));

const AffliatePrograms: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedAffiliate, setSelectedAffiliate] = useState<string>("");
  const [selectedCommission, setSelectedCommission] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");
  const [selectedTicket, setSelectedTicket] = useState<string>("");
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // handle submit logic
  };

  return (
    <section className="max-container padding-container mt-10  w-full">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search Program"
          value={searchQuery}
          onChange={handleInputChange}
          className="w-full xs:w-full lg:px-4 py-2 pl-10 mb-10 lg:pl-10 border placeholder:regular-16 border-gray-20 xl:w-[60%] text-gray-10 bg-transparent placeholder:text-gray-10 rounded-3xl"
        />
        <Image
          src="/search.svg"
          alt="search"
          width={17}
          height={17}
          className="absolute left-4 top-0 lg:top-[0.8px] lg:left-3 mt-3"
        />
      </div>
      <div className="hidden lg:block">
        <form onSubmit={onSubmit} className="mt-5 flexBetween gap-4 min-w-fit">
          <SelectInput
            name="Affiliates"
            label=""
            options={Affiliates}
            placeholder="All Affiliates Type"
            value={selectedAffiliate}
            onChange={setSelectedAffiliate}
          />
          <SelectInput
            name="commissions"
            label=""
            options={Commissions}
            placeholder="Commission Type"
            value={selectedCommission}
            onChange={setSelectedCommission}
          />
          <SelectInput
            name="levels"
            label=""
            options={Levels}
            placeholder="All levels"
            value={selectedLevel}
            onChange={setSelectedLevel}
          />
          <SelectInput
            name="Tickets"
            label=""
            options={Tickets}
            placeholder="Ticket Type"
            value={selectedTicket}
            onChange={setSelectedTicket}
          />
          <SelectInput
            name="Payments"
            label=""
            options={Payments}
            placeholder="Payment Method"
            value={selectedPayment}
            onChange={setSelectedPayment}
          />
        </form>
      </div>
      <div className="">
        <LoadMoreComponent searchQuery={searchQuery} />
      </div>
    </section>
  );
};

export default AffliatePrograms;
