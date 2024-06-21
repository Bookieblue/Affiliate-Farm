"use client"

import { ColumnDef } from "@tanstack/react-table"

 

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
        <div className="text-xs text-gray-400">{row.original.publisherEmail}</div>
      </div>
    ),
  },
];

