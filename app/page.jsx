import Image from "next/image";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Record from "./components/Record";
import Services from "./components/Services";

export default function Home() {
	return (
		<main className="">
         <Hero />
		 <Featured />
		 <Record/>
		 <Services />
    </main>
	);
}
