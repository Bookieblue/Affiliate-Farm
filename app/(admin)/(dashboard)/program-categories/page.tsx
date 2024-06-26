"use client";
import Categories from "@/components/tables/program-categories/page";
import MainDialog from "@/components/ui/FormField/MainDialog";
import { Button } from "@/components/ui/button";

import React, { useState } from "react";

const page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleViewDetails = () => {
    setModalOpen(true);
  };
  return (
    <section className="mt-32 padding-container">
      <Categories />
    </section>
  );
};

export default page;
