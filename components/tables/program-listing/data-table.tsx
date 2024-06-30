"use client";

import React, { useMemo, useState } from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Ad, createColumns } from './columns';

interface DataTableProps<TData extends { [key: string]: any }, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  searchQuery: string;
}

export function DataTable<TData extends { [key: string]: any }, TValue>({
  columns,
  data,
  searchQuery,
}: DataTableProps<TData, TValue>) {
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const renderPageButtons = () => {
    const pageCount = table.getPageCount();
    const currentPage = table.getState().pagination.pageIndex;
    const pageButtons = [];

    for (let i = 0; i < pageCount; i++) {
      if (
        i === 0 ||
        i === pageCount - 1 ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pageButtons.push(
          <button
            key={i}
            className={`px-3 py-1 border rounded ${
              currentPage === i
                ? 'bg-yellow-50 border border-yellow-50 text-black'
                : 'bg-transparent border border-gray-10 text-gray-10'
            }`}
            onClick={() => table.setPageIndex(i)}
          >
            {i + 1}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pageButtons.push(<span key={i} className="border rounded px-2 py-2">...</span>);
      }
    }

    return pageButtons;
  };

  return (
    <div>
      <div className="rounded-md border border-[#32312C]">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className={row.getIsSelected() ? 'bg-yellow-50' : ''}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end mt-4">
        <ul className="flex space-x-2">
          {renderPageButtons()}
        </ul>
      </div>
    </div>
  );
}
