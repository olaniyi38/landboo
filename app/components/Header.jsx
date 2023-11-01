import Image from "next/image"


const Header = () => {
  return (
    <header className="border py-2 px-4 flex items-center gap-x-2">
        <Image src="/images/logo.svg" width={40} height={40} alt="logo"/>
        <p className="font-bold text-xl">LANDBOO</p>
    </header>
  )
}

export default Header