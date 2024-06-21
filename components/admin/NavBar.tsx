"use client";
import { ADMIN_NAV_LINKS, NAV_LINKS} from "../../constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Key, useState } from "react";
import { ChevronRight, Mic2, MicVocal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useSearchParams } from "next/navigation";
import MoreResources from "./../MoreResources";
import MainDialog from "./../ui/FormField/MainDialog";
import FeaturedAdForm from "./../forms/featuredAd";


const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [activeLink, setActiveLink] = useState(`${pathname}?${searchParams}`);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const [isMainDialogOpen, setIsMainDialogOpen] = useState(false);



  const handleFormSubmit = (values: any) => {
    console.log('Form Submitted:', values);
    // Close main dialog and open success dialog
    setIsMainDialogOpen(false);
    // You can also perform navigation or other actions here
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const showNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flexBetween bg-black-60 w-full py-3 fixed border-b border-[#32312C] top-0 z-10">
      <div className="max-container padding-container flexBetween w-full 4xl:px-0">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={29} />
          </Link>
        </div>

        <div className="flexBetween gap-10">
          <ul className="hidden h-full gap-12  lg:flexBetween">
            {ADMIN_NAV_LINKS.map((link) => (
              <div className="flex items-center gap-2" key={link.key}>
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={link.iconWidth || 20}
                  height={link.iconHeight || 20}
                  className={`mb-2 ${activeLink === link.href ? 'text-blue-500' : 'fill-yellow-50'}`}
                />
                  <Link href={link.href}>
                    <span
                      className={`regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                        activeLink === link.href
                          ? "font-bold text-yellow-50 "
                          : ""
                      }`}
                      onClick={() => handleLinkClick(link.href)}
                    >
                      {link.label}
                    </span>
                  </Link>
              </div>
            ))}
          </ul>
          <div className="">
            <MainDialog
            title="Submit brand affiliate program"
            description=""
            isOpen={isMainDialogOpen}
            onOpenChange={() => setIsMainDialogOpen(false)}
            onClick={() => setIsMainDialogOpen(true)}
            buttonName={(
              <>
                Upload Program <ChevronRight size={18} bg-black-50 />{" "}
              </>
            )}
          >
            <FeaturedAdForm onClick={handleFormSubmit}/>
          </MainDialog>
          </div>
        </div>
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={showNav}
          className="inline-block cursor-pointer lg:hidden"
        ></Image>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-[65%] h-screen bg-white border-2 p-5 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full justify-end items-center">
            <div onClick={showNav} className="cursor-pointer">
              <h1 className="bold-32 mb-5">&times;</h1>
            </div>
          </div>
          <ul className="">
            {NAV_LINKS.map(
              (link: { href: string; key: Key; label: string }) => (
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  key={link.key}
                  className="medium-16 text-black flexStart cursor-pointer py-3 transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              )
            )}
          </ul>
          <div className="mt-5">
            <Button type="button" title="Ask for invite" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
