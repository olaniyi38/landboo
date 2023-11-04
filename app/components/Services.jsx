import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

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
			<h1 className=" capitalize font-bold text-xl">{title}</h1>
			<div className="relative aspect-[4/3] rounded-sm">
				<Image src={imgSrc} fill alt={title + "image"} className="object-cover"/>
			</div>
			<div className="flex items-center justify-between uppercase text-xs">
				<p className="font-semibold lg:text-sm">{tag}</p>
				<Link href={url} className=" self-end">
					<Button >
						know more
					</Button>
				</Link>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<section>
			<div className="py-8 px-4  md:p-12 lg:p-16 space-y-8 lg:space-y-20	">
				<h1 className=" font-bold md:font-extrabold text-2xl md:text-3xl">Our Services</h1>
				<div className="grid md:grid-cols-2 gap-6 md:gap-12 lg:gap-x-16 lg:gap-y-24">
					{services.map((s) => (
						<Service key={s.title} data={s} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;

//     {
//         type: "residential",
//         image: "1",
//     },
//     {
//         type: "landed",
//         image: "2",
//     },
//     {
//         type:"commercial",
//         image: "3",
//     },
//     {
//         type: "industrial",
//         image: "1",
//     }
// ]

// const Services = ()=>{
//     return (
//         <div>
//             <div>

//             <h2>Our Services</h2>
//             </div>

// <div>
//     {
//         services.map((service)=>{
//             <div>
//                 <h3>{service.type}</h3>
//                 <Image src="/images/serv-$`{service.image}`.webp" alt="house-hero"/>
//             </div>
//         })
//     }
// </div>
//         </div>
//     )
// }

// export default Services;
