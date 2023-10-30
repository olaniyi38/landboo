import Image from "next/image"


const Header = () => {
  return (
    <header className="border py-2 px-4">
        <Image src="/images/logo.svg" width={40} height={40} alt="logo"/>
    </header>
  )
}

export default Header