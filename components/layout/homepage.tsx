import SideNav from "@/components/SideBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function AffiliatePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hide-scrollbar w-full ">
        <Navbar />
        <div className="min-h-screen mx-auto max-w-[1700px] w-full lg:grid-cols-[250px,1fr] grid ">
          <div className="row-span-1 col-span-1 hidden lg:block ">
            <SideNav />
          </div>
          <div className="row-span-1 col-span-1 ">
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

