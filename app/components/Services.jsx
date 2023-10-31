import Image from "next/image";
import Link from "next/link";

const services = [
	{
		imgSrc: "/images/serv-1.webp",
		title: "residential",
		url: "#",
		tag: "app design",
	},
	{
		imgSrc: "/images/serv-2.webp",
		title: "landed",
		url: "#",
		tag: "branding",
	},
	{
		imgSrc: "/images/serv-3.webp",
		title: "commercial",
		url: "#",
		tag: "web app",
	},
	{
		imgSrc: "/images/serv-4.webp",
		title: "industrial",
		url: "#",
		tag: "augmented reality",
	},
];

const Service = ({ data }) => {
	const { imgSrc, title, url, tag } = data;

	return (
		<div className=" flex flex-col gap-y-4">
			<h1 className=" capitalize font-medium text-xl">{title}</h1>
			<div className="relative aspect-square rounded-sm">
				<Image src={imgSrc} fill alt={title + "image"} />
			</div>
			<div className="flex items-center justify-between uppercase text-xs">
				<p className="font-medium">{tag}</p>
				<Link href={url} className=" self-end">
					<button className=" bg-darkPurple text-white py-1 px-3 rounded text-xs first-letter:capitalize ">
						know more
					</button>
				</Link>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<section>
			<div className="py-8 px-4 space-y-8">
				<h1 className=" font-bold text-2xl">Our Services</h1>

				<div className=" flex flex-col gap-y-6">
					{services.map((s) => (
						<Service key={s.title} data={s} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
