"use client"

import Image from "next/image"
import Link from "next/link";
import Button from "./Button";
import { AiOutlineBars } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import MobileNav from "./MobileNav";
import { useState } from "react";


export const LINKS = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about us",
    url: "/categories/headphones",
  },
  {
    title: "gallery",
    url: "/categories/speakers",
  },
  {
    title: "hot offers",
    url: "/categories/earphones",
  },
];

const Header = () => {
  const [navOpen, setNavopen] = useState(false)

  return (
    <>
      <header className="border py-2 px-4 md:px-12 md:py-4 lg:px-16 xl:px-32 lg:py-6 flex items-center gap-x-2 sticky top-0 z-30 bg-white">
        <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
        <nav className="hidden lg:flex lg:items-center lg:ml-auto lg:gap-x-8 xl:gap-x-12">
          {
            LINKS.map(({ title, url }) => (
              <Link key={title + url} className=" font-medium capitalize" href={url}>{title}</Link>
            ))
          }
          <Link href="#">
            <Button>
              Contact Us
            </Button>
          </Link>
        </nav>

        <button onClick={() => setNavopen(!navOpen)} className="lg:hidden ml-auto">
          <FaBars className=" w-5 h-5" />
        </button>
      </header>
      <MobileNav isActive={navOpen} />
    </>
  )
}

export default Header