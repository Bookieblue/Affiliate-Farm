import { Ad, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Ad[]> {
  // Fetch data from your API here.
  return [
    { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Expired' },
  { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Expired' },
  { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Expired' },
  { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02345', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  { orderId: '02346', program: 'Jasper AI', duration: '2 Months', paymentDate: 'Jun 4, 2024', expiringDate: 'Aug 4, 2024', customer: 'Johnson Petel', customerEmail: 'johnsonpetel123@gmail.com', status: 'Active' },
  

  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="mt-10  mb-20">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
