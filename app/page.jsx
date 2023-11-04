import Hero from "./components/Hero";
import FeaturedProperties from "./components/FeaturedProperties";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Guide from './components/Guide'
import Cta from "./components/Cta";


export default function Home() {
	return (
		<main className="">
			<Hero />
			<FeaturedProperties />
			<Stats />
			<Services />
			<Guide />
			<Testimonials />
			<Cta />
		</main>
	);
}
