import {  Category, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Category[]> {
  // Fetch data from your API here.
  return [
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},
    { no: '1', category: 'Travel affiliate program', programNo: '124 programs',  publishedDate: 'Aug 4, 2024'},

  ]
}

export default async function Categories() {
  const data = await getData()

  return (
    <div className="mt-10 mb-20">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
