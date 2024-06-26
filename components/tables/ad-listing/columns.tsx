"use client";

import { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EyeIcon, MoreHorizontal } from "lucide-react";
import MainDialog from "../../../components/ui/FormField/MainDialog";
import Programs from "@/components/Program";
import Image from "next/image";

export interface Ad {
  orderId: string;
  program: string;
  duration: string;
  paymentDate: string;
  expiringDate: string;
  customer: string;
  customerEmail: string;
  status: "Active" | "Expired";
}

export const columns: ColumnDef<Ad>[] = [
  {
    accessorKey: "orderId",
    header: "ORDER ID",
  },
  {
    accessorKey: "program",
    header: "PROGRAM",
    cell: ({ getValue }) => (
      <span className={cn("text-cream-50 font-bold")}>
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: "duration",
    header: "DURATION",
  },
  {
    accessorKey: "paymentDate",
    header: "PAYMENT DATE",
  },
  {
    accessorKey: "expiringDate",
    header: "EXPIRING DATE",
  },
  {
    accessorKey: "customer",
    header: "CUSTOMER",
    cell: ({ row }) => (
      <>
        <div>{row.original.customer}</div>
        <div className="text-xs">{row.original.customerEmail}</div>
      </>
    ),
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ getValue }) => (
      <span
        className={cn(
          "px-2 py-1 rounded-md text-xs font-semibold",
          getValue<string>() === "Active"
            ? "bg-green-200 text-green-800"
            : "bg-red-200 text-red-800"
        )}
      >
        {getValue<string>()}
      </span>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const [isModalOpen, setModalOpen] = useState(false);
      const details = row.original;

      const handleViewDetails = () => {
        setModalOpen(true);
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleViewDetails}>
                <EyeIcon className="size-4 mr-2" /> View details
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {isModalOpen && (
            <MainDialog
              isOpen={isModalOpen}
              onOpenChange={() => setModalOpen(false)}
              title="Affliate Program"
              description=""
            >
              <div>
                <Programs
                  id={0}
                  src={"/jasper.svg"}
                  commission={"25%"}
                  name={details.program}
                  cookie={"60 days cookie"}
                  payout={"$100 Payout"}
                  program_description={
                    "With jasper user can start creating massive blog, ebook, music , etc contents with AI."
                  }
                  program_ID={""}
                  url={""}
                  product_description={"Content writing tool"}
                />
                <div className="flex gap-7 mt-2">
                  <div className="flex gap-3">
                    <Image src="/date.svg" width={20} height={20} alt="icon" />
                    <p className="text-cream-20">
                      Posted: {details.paymentDate}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src="/broadcast2.svg"
                      width={20}
                      height={20}
                      alt="icon"
                    />
                    <p className="text-cream-20">{details.status} AD</p>
                  </div>
                </div>
                <div className="mt-4 text-cream-20">
                  <p>Publisher:</p>
                  <p className="mt-3">{details.customer}</p>
                  <p>{details.customerEmail}</p>
                </div>
              </div>
            </MainDialog>
          )}
        </>
      );
    },
  },
];
