
// lib/data.ts
export const programData = [
    {
      id: 1,
      src: '/jasper.svg',
      commission: '$400.00',
      name: 'Jasper AI',
      product_description: 'Content writing tool',
      payout: '$100 Payout',
      cookie: '60 days Cookie',
      program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
      url: '/',
      program_ID: 'Program ID: 00480'
    },
    {
        id: 2,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 3,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Dami',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 4,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 5,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Dami',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 6,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 7,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 8,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Bookie',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 9,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 10,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Vicky',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 11,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
      {
        id: 12,
        src: '/jasper.svg',
        commission: '$400.00',
        name: 'Jasper AI',
        product_description: 'Content writing tool',
        payout: '$100 Payout',
        cookie: '60 days Cookie',
        program_description: 'With jasper,user can start creating massive blog, ebook, music , etc contents withmAI.',
        url: '/',
        program_ID: 'Program ID: 00480'
      },
    // Add more items as needed
  ];
  
  export async function fetchPrograms(offset: number, limit: number, query: string = '') {
    // Simulate an API call with a timeout
    return new Promise<typeof programData>(resolve => {
      setTimeout(() => {
        const filteredData = programData.filter(program =>
          program.name.toLowerCase().includes(query.toLowerCase()) ||
          program.product_description.toLowerCase().includes(query.toLowerCase()) ||
          program.cookie.toLowerCase().includes(query.toLowerCase()) ||
          program.payout.toLowerCase().includes(query.toLowerCase()) ||
          program.commission.toLowerCase().includes(query.toLowerCase()) ||
          program.program_ID.toLowerCase().includes(query.toLowerCase()) 
        );
        resolve(filteredData.slice(offset, offset + limit));
      }, 500);
    });
  }
  