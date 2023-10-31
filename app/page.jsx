import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import Featured from "./components/Featured";

export default function Home() {
	return (
		<main className="">
         <Hero />
		 <FeaturedProperties />
		 <Featured />
    </main>
	);
}
