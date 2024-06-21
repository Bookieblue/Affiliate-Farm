"use client"

import { ColumnDef } from "@tanstack/react-table"
import { cn } from '@/lib/utils';
 

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


]
   
  
  
