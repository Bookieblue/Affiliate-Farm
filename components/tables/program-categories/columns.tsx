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
import CategoryForm from "@/components/forms/CategoryForm";

 

export interface Category {
  no: string;
  category: string;
  programNo: string;
  publishedDate: string;

}


export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'no',
    header: 'NO',
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY',
    cell: ({ getValue }) => (
      <span
        className={cn(
          'text-cream-50 font-bold'
        )}
      >
        {getValue<string>()}
      </span>
    ),
  },
  {
    accessorKey: 'programNo',
    header: 'PROGRAM NO',
  },
  {
    accessorKey: 'publishedDate',
    header: 'PUBLISHED DATE',
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
                <EyeIcon className="size-4 mr-2" /> View Category
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
                 
              </div>
            </MainDialog>
          )}
        </>
      );
    },
  },


]
   
  
  
