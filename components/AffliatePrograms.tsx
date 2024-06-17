'use client';
import React, { useState, ChangeEvent } from 'react';
import SelectInput from "./ui/FormField/SelectInput"
import { AFFLIATE_TYPE, ALL_LEVELS, COMMISSION_TYPE, PAYMENT_METHOD, TICKET_TYPE} from '../constant/index';
import Image from 'next/image';
import Programs from './Programs';
import { Form } from "../components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import LoadMoreComponent from './LoadMoreComponent';

const Tickets =  TICKET_TYPE.map((ticket) => ({
    label: ticket.name,
    value: ticket.name,
  }));

  const Levels =  ALL_LEVELS.map((level) => ({
    label: level.name,
    value: level.name,
  }));

  const Payments =  PAYMENT_METHOD.map((payment) => ({
    label: payment.name,
    value: payment.name,
  }));

  const Affiliates =  AFFLIATE_TYPE.map((affiliate) => ({
    label: affiliate.name,
    value: affiliate.name,
  }));

  const Commissions =  COMMISSION_TYPE.map((commission) => ({
    label: commission.name,
    value: commission.name,
  }));


const SubmitProgramSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Incorrect email address"),
  password: z.string().min(8, "Password is required"),
});

const AffliatePrograms = () => {

    const [searchQuery, setSearchQuery] = useState('');

    // const handleSearch = () => {
    //     // Implement your search functionality here
    //     console.log('Search query:', searchQuery);
    //   };
    
    //   const handleButtonClick = () => {
    //     handleSearch(); // Trigger search action when button is clicked
    //   };

      const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
      };

      const form = useForm<z.infer<typeof SubmitProgramSchema>>({
        resolver: zodResolver(SubmitProgramSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      });
    
      const onSubmit = () => {};
  return (
    <section className="max-container padding-container mt-10 w-full">  

    <div className='relative w-full'>
    <input
              type="text"
              placeholder="Search Program"
              value={searchQuery}
              onChange={handleInputChange}
              className="w-full xs:w-32 lg:px-4 py-2 pl-10  mb-10 lg:pl-10 border placeholder:regular-16 border-gray-20 xl:w-[60%] text-gray-10 bg-transparent placeholder:text-gray-10 rounded-3xl"
        />
        <Image
              src="/search.svg"
              alt="search"
              width={17}
              height={17}
              className="absolute left-4 top-2 lg:top-[0.8px] lg:left-3 mt-3"
        /> 
    </div>
    <div className=''>
    <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 flexBetween gap-4 "
        >
    <SelectInput
       control={form.control}
            name="Affiliates"
            label=""
            options={Affiliates}
            placeholder="All Affiliates Type"
    />
    <SelectInput
     control={form.control}
            name="commissions"
            label=""
            options={Commissions}
            placeholder="Commission Type"
    />
    <SelectInput
     control={form.control}
            name="levels"
            label=""
            options={Levels}
            placeholder="All levels"
    />
    <SelectInput
     control={form.control}
            name="Tickets"
            label=""
            options={Tickets}
            placeholder="Ticket Type"
    />
    <SelectInput
     control={form.control}
            name="ayments"
            label=""
            options={Payments}
            placeholder="Payment Method"
    />
       </form>
       </Form> 
    </div>
  <div className=''>
  <LoadMoreComponent searchQuery={searchQuery} />
  </div>
 
    


</section>
  )
}

export default AffliatePrograms