import type { Metadata } from "next";
import Navbar from "@/components/admin/NavBar";
import SideBar from "@/components/admin/SideBar";

export const metadata: Metadata = {
  title: "Dashboard | Affiliate Farm App",
  description: "",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-[1700px] min-h-screen grid grid-cols-1 md:grid-cols-[250px,1fr]">
        <div className="row-span-1 col-span-1 hidden md:block">
          <SideBar />
        </div>
        <div className="row-span-1 col-span-1 max-w-[1700px]">
          {children}
        </div>
      </div>
    </div>
    </>
  );
}

