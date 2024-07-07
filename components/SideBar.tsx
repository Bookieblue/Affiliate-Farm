'use client';
import React, { useState, useEffect, MouseEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { AFFLIATE_PROGRAMS_LINKS } from '@/constant';
import { ChevronRight } from 'lucide-react';

const SideBar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(`${pathname}?${searchParams.toString()}`);
  }, [pathname, searchParams]);

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setActiveLink(href);
    router.push(href);
  };

  return (
    <section className="gap-10 pl-8 z-20 fixed bg-black-30 h-full">
      <div className="pt-5">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={29} />
        </Link>
        <p className="medium-20 text-cream-50 pt-20">Categories</p>
      </div>
      <div className="mt-5 pr-5 h-[calc(100vh-8rem)] overflow-y-scroll scrollbar-visible pb-20">
        {AFFLIATE_PROGRAMS_LINKS.map((link) => {
          const linkHref = `${link.link}?${searchParams.toString()}`;
          return (
            <div className="flex mb-10" key={link.name}>
              <Link href={link.link} onClick={(event) => handleLinkClick(event, linkHref)} className="flex gap-1 w-40">
                <ChevronRight className={`size-4 mt-1 ${activeLink === linkHref ? 'text-yellow-500' : 'text-gray-10'}`} />
                <p className={`ml-2 ${activeLink === linkHref ? 'text-yellow-500' : 'text-gray-10'}`}>{link.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SideBar;
