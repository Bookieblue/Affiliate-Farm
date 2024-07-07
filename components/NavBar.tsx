"use client";
import { NAV_LINKS } from "../constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import React, { useState, useEffect, MouseEvent } from "react";
import { ChevronRight } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import MoreResources from "./MoreResources";
import { AFFLIATE_PROGRAMS_LINKS } from "@/constant";

const Navbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(`${pathname}?${searchParams.toString()}`);
  }, [pathname, searchParams]);

  const handleLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setActiveLink(href);
    router.push(href);
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const showNav = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMobileLinkClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(!menuOpen);
    event.preventDefault();
    setActiveLink(href);
    router.push(href);
  };

  return (
    <nav className=" bg-black-60 w-full py-3 fixed top-0 z-10">
      <div className="max-container padding-container flexBetween w-full 4xl:px-0">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={29} />
          </Link>
        </div>

        <div className="flexBetween gap-5 xl:gap-10">
          <ul className="hidden h-full gap-5 xl:gap-12 lg:flexBetween">
            {NAV_LINKS.map((link) => {
              const IconComponent = link.icon;
              const linkHref = `${link.href}?${searchParams.toString()}`;
              return (
                <div
                  className="flex items-center justify-center gap-2"
                  key={link.key}
                >
                  <div className="mb-2">
                    <IconComponent
                      width={link.iconWidth || 20}
                      height={link.iconHeight || 20}
                      color={activeLink === linkHref ? "#FFD700" : "#8D8885"}
                    />
                  </div>
                  {link.key !== "more-resources" ? (
                    <Link
                      href={link.href}
                      onClick={(event) => handleLinkClick(event, linkHref)}
                    >
                      <span
                        className={`regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                          activeLink === linkHref
                            ? "font-bold text-yellow-50 "
                            : "text-gray-10"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <Popover>
                      <PopoverTrigger className="regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                      </PopoverTrigger>
                      <PopoverContent>
                        <MoreResources />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              );
            })}
          </ul>
          <div className="hidden lg:block">
            <Button onClick={() => router.push("/submit-program")}>
              Submit Program <ChevronRight size={18} bg-black-50 />
            </Button>
          </div>
        </div>
        <Image
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          onClick={showNav}
          className="inline-block cursor-pointer lg:hidden"
        ></Image>
        <div
          className={
            menuOpen
              ? "fixed left-0 top-0 w-fit h-full overflow-y-scroll scrollbar-hidden bg-[#161102] pt-5 px-6 ease-in duration-500"
              : "fixed left-[-100%] top-0 px-6 pt-5 ease-in duration-500"
          }
        >
          <div className="flex w-full justify-end items-center">
            <div onClick={showNav} className="cursor-pointer ">
              <h1 className="bold-32 mb-5  text-cream-20">&times;</h1>
            </div>
          </div>
          <div>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={150} height={29} />
            </Link>
          </div>
          <ul className="lg:hidden h-full pl-2  lg:flexBetween">
            {NAV_LINKS.map((link) => {
              const IconComponent = link.icon;
              const linkHref = `${link.href}?${searchParams.toString()}`;
              return (
                <div
                  className="flex items-center gap-2 mb-5 mt-4"
                  key={link.key}
                >
                  <div className="mb-2">
                    <IconComponent
                      width={link.iconWidth || 20}
                      height={link.iconHeight || 20}
                      color={activeLink === linkHref ? "#FFD700" : "#8D8885"}
                    />
                  </div>
                  {link.key !== "more-resources" ? (
                    <Link
                      href={link.href}
                      onClick={(event) =>
                        handleMobileLinkClick(event, linkHref)
                      }
                    >
                      <span
                        className={`regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ${
                          activeLink === linkHref
                            ? "font-bold text-yellow-50 "
                            : "text-gray-10"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  ) : (
                    <Popover>
                      <PopoverTrigger className="regular-16 text-gray-10 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
                        {link.label}
                      </PopoverTrigger>
                      <PopoverContent>
                        <MoreResources />
                      </PopoverContent>
                    </Popover>
                  )}
                </div>
              );
            })}

            <div className="lg:hidden">
              <Button onClick={() => router.push("/submit-program")}>
                Submit Program <ChevronRight size={18} bg-black-50 />
              </Button>
            </div>
            <div className="mt-5 pr-5 lg:hidden  pb-20">
            <p className="medium-20 text-cream-50 py-2">Categories</p>
              {AFFLIATE_PROGRAMS_LINKS.map((link) => {
                const linkHref = `${link.link}?${searchParams.toString()}`;
                return (
                  <div className="flex mb-10" key={link.name}>
                    <Link
                      href={link.link}
                      onClick={(event) =>
                        handleMobileLinkClick(event, linkHref)
                      }
                      className="flex gap-1 w-40"
                    >
                      <ChevronRight
                        className={`size-4 mt-1 ${
                          activeLink === linkHref
                            ? "text-yellow-500"
                            : "text-gray-10"
                        }`}
                      />
                      <p
                        className={`ml-2 ${
                          activeLink === linkHref
                            ? "text-yellow-500"
                            : "text-gray-10"
                        }`}
                      >
                        {link.name}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
