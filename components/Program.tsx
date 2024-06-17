import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ToolTip } from "./ui/FormField/ToolTip";

interface ProgramProps {
    id: number;
    src: string;
    commission: string;
    name: string;
    cookie: string;
    payout: string;
    program_description: string;
    program_ID: string;
    url: string;
    product_description: string;
  }

const Programs = ({id, src, commission, name, product_description, payout, cookie, program_description, url, program_ID}: ProgramProps) => {
  return (
    <div className="w-fit h-fit p-4 bg-transparent rounded-xl border border-zinc-800 flex-col gap-4 inline-flex">
      <div className="self-stretch flexBetween">
        <div className="size-[60px] rounded-lg flexCenter">
          <Image src={src} width={60} height={20} alt="icon" />
        </div>
        <div className="flexCenter gap-[7px]">
          <div className="w-[70px] p-2 bg-yellow-50 rounded-lg flexCenter gap-2.5 ">
            <p className="text-black-50 bold-14">{commission}</p>
          </div>
          <p className="w-[100px] text-cream-20 regular-14">
            One-time sale commission
          </p>
        </div>
      </div>
      <div className="flex gap-2 ">
        <div className="text-cream-50 bold-24 ">{name}</div>
        <div className="size-[18px] relative rounded-[100px] bg-yellow-50" />
      </div>
      <p className="self-stretch text-gray-10 regular-14">
        {product_description}
      </p>

      <div className="self-stretch flexStart gap-3 w-full">
        <div className="gap-1 flexStart w-full">
          <Image src="./payout.svg" width={20} height={5} alt="icon" />
          <p className="text-gray-10 regular-14">{payout}</p>
        </div>
        <div className="gap-1 flexStart w-full">
          <Image src="./time.svg" width={20} height={5} alt="icon" />
          <p className="text-gray-10 regular-14">{cookie}</p>
        </div>
      </div>
      <p className="grow shrink basis-0 text-gray-10 regular-16">
        <span className="text-cream-20 medium-14">Program:</span> {program_description}
      </p>
      <div className="self-stretch py-2.5 flexBetween">
        <ToolTip  content={program_ID} key={id}/>
        <Link href={url} className="text-yellow-50 medium-16 underline">
          Join Program
        </Link>
      </div>
    </div>
  );
};

export default Programs;
