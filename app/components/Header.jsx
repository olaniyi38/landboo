import Image from "next/image"
import Link from "next/link";
import Button from "./Button";
import { AiOutlineBars } from "react-icons/ai";
import { FaBars } from "react-icons/fa";


const LINKS = [
  {
    title: "buy home",
    url: "/",
  },
  {
    title: "sell home",
    url: "/categories/headphones",
  },
  {
    title: "find agent",
    url: "/categories/speakers",
  },
  {
    title: "how it works",
    url: "/categories/earphones",
  },
];

const Header = () => {
  return (
    <header className="border py-2 px-4 md:px-12 md:py-4 lg:px-32 lg:py-6 flex items-center gap-x-2">
      <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
      <p className="font-bold text-xl">LANDBOO</p>
      <nav className="hidden lg:flex lg:items-center lg:ml-auto lg:gap-x-8 xl:gap-x-12">
        {
          LINKS.map(({ title, url }) => (
            <Link key={title + url} className=" font-medium capitalize" href={url}>{title}</Link>
          ))
        }
        <Link href="#">
          <Button>
            Sign Up
          </Button>
        </Link>
      </nav>

      <button className="lg:hidden ml-auto">
        <FaBars className=" w-5 h-5" />
      </button>
    </header>
  )
}

export default Header