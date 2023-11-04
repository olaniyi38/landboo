import Image from "next/image"


const Header = () => {
  return (
    <header className="border py-2 px-4 md:px-12 md:py-4 lg:px-32 lg:py-4 flex items-center gap-x-2">
        <Image src="/images/logo.svg" width={40} height={40} alt="logo"/>
        <p className="font-bold text-xl">LANDBOO</p>
        <nav>
           
        </nav>
    </header>
  )
}

export default Header