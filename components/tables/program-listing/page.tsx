import React from 'react';
import { DataTable } from './data-table';
import { Ad, columns } from './columns';



const adsData: Ad[] = [
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  {
    program: 'Jasper AI',
    commission: '25% One-Time commission',
    category: 'Travel Affiliate Program',
    publishedDate: 'Aug. 4, 2024',
    publisher: 'Johnson Petel',
    publisherEmail: 'johnsongreat123@gmail.com',
  },
  // Add more rows as needed
];


const AdsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <DataTable columns={columns} data={adsData} />
    </div>
  );
};

export default AdsPage;
