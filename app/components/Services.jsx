import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const services = [
	{
		imgSrc: "/images/feat-1.webp",
		title: "residential",
		url: "#",
		tag: "purchase, sales, renting and leasing",
	},
	{
		imgSrc: "/images/serv-2.webp",
		title: "landed",
		url: "#",
		tag: "land survey, land banking",
	},
	{
		imgSrc: "/images/serv-3.webp",
		title: "commercial",
		url: "#",
		tag: "commercial real estate development",
	},
	{
		imgSrc: "/images/serv-4.webp",
		title: "construction",
		url: "#",
		tag: "property development and management",
	},
];

const Service = ({ data }) => {
	const { imgSrc, title, url, tag } = data;

	return (
		<div className=" flex flex-col gap-y-4">
			<h1 className=" capitalize font-bold text-xl">{title}</h1>
			<div className="relative aspect-[4/3] rounded-md">
				<Image src={imgSrc} fill alt={title + "image"} className="object-cover rounded-md"/>
			</div>
			<div className="flex items-start justify-between uppercase text-xs">
				<p className="font-semibold pr-2 xs:pr-0 flex-1 sm:max-w-[15rem]  lg:text-sm">{tag}</p>
				<Link href={url} className=" self-end">
					<Button >
						learn more
					</Button>
				</Link>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<section>
			<div className="space-y-8 lg:space-y-16	">
				<h1 className=" font-bold md:font-extrabold text-2xl md:text-3xl lg:text-4xl">Our Services</h1>
				<div className="grid md:grid-cols-2 gap-6 gap-y-12 md:gap-12 lg:gap-x-16 lg:gap-y-24">
					{services.map((s) => (
						<Service key={s.title} data={s} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;


