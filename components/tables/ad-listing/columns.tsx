"use client"

import { ColumnDef } from "@tanstack/react-table"
import { cn } from '@/lib/utils';
 

export interface Ad {
  orderId: string;
  program: string;
  duration: string;
  paymentDate: string;
  expiringDate: string;
  customer: string;
  customerEmail: string;
  status: "Active" | "Expired"
}


export const columns: ColumnDef<Ad>[] = [
  {
    accessorKey: 'orderId',
    header: 'ORDER ID',
  },
  {
    accessorKey: 'program',
    header: 'PROGRAM',
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
    accessorKey: 'duration',
    header: 'DURATION',
  },
  {
    accessorKey: 'paymentDate',
    header: 'PAYMENT DATE',
  },
  {
    accessorKey: 'expiringDate',
    header: 'EXPIRING DATE',
  },
  {
    accessorKey: 'customer',
    header: 'CUSTOMER',
    cell: ({ row }) => (
      <>
        <div>{row.original.customer}</div>
        <div className="text-xs">{row.original.customerEmail}</div>
      </>
    ),
  },
  {
    accessorKey: 'status',
    header: 'STATUS',
    cell: ({ getValue }) => (
      <span
        className={cn(
          'px-2 py-1 rounded-md text-xs font-semibold',
          getValue<string>() === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
        )}
      >
        {getValue<string>()}
      </span>
    ),
  },
]
   
  
  
