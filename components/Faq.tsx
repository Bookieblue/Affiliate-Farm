import React from 'react';

const Faq: React.FC<{ faq: string }> = ({ faq }) => {
  console.log(faq);
  return (
    <section className="padding-container mt-20 lg:w-[80%]">
      <div>
        <h3 className="font-[600px] text-[34px] text-cream-50">
          Frequently asked questions about Travel Affiliate programs
        </h3>
        <div>
          <div
            className="text-cream-50"
            dangerouslySetInnerHTML={faq ? { __html: faq } : undefined}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
