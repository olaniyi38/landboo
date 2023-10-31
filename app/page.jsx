import Image from "next/image";
import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";

export default function Home() {
	return (
		<main className="">
         <Hero />
		 <FeaturedProperties />
    </main>
	);
}
