import type { Metadata } from "next";
// import "../globals.css";
import Navbar from "@/components/admin/NavBar";

export const metadata: Metadata = {
  title: "Admin | Affilaite Farm App",
  description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
      <Navbar />
      {children}
      </>    
  );
}
