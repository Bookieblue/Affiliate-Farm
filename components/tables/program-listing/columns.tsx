"use client"

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
import { DeleteIcon, Edit2Icon, EyeIcon, MoreHorizontal } from "lucide-react";
import MainDialog from "../../../components/ui/FormField/MainDialog";

 

export interface Ad {
  program: string;
  commission: string;
  category: string;
  publishedDate: string;
  publisher: string;
  publisherEmail: string;
}


export
const columns: ColumnDef<Ad>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        className="custom-checkbox"
        checked={table.getIsAllPageRowsSelected()}
        onChange={table.getToggleAllPageRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        className="custom-checkbox"
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: 'program',
    header: 'PROGRAM',
  },
  {
    accessorKey: 'commission',
    header: 'COMMISSION',
  },
  {
    accessorKey: 'category',
    header: 'CATEGORY',
  },
  {
    accessorKey: 'publishedDate',
    header: 'PUBLISHED DATE',
  },
  {
    accessorKey: 'publisher',
    header: 'PUBLISHER',
    cell: ({ getValue, row }) => (
      <div>
        <div>{getValue<string>()}</div>
        <div className="text-xs text-cream-20">{row.original.publisherEmail}</div>
      </div>
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
                <EyeIcon className="size-4 mr-2" /> Edit Category
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleViewDetails}>
                <Edit2Icon className="size-4 mr-2" /> Edit Program
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleViewDetails}>
                <DeleteIcon className="size-4 mr-2" /> Delete Program
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
];

