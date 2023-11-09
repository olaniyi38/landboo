import Image from "next/image";
import Link from "next/link";
import {
	AiOutlineInstagram,
	AiOutlineDribbble,
	AiOutlineYoutube,
	AiOutlineTwitter,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa";

const links = [
	{
		title: "company",
		urls: [
			{
				name: "about us",
				url: "#",
			},
			{
				name: "blog",
				url: "#",
			},
			{
				name: "careers",
				url: "#",
			},
			{
				name: "contact us",
				url: "#",
			},
		],
	},
	{
		title: "support",
		urls: [
			{
				name: "help center",
				url: "#",
			},
			{
				name: "safety center",
				url: "#",
			},
			{
				name: "community guidelines",
				url: "#",
			},
		],
	},
	{
		title: "legal",
		urls: [
			{
				name: "cookies policy",
				url: "#",
			},
			{
				name: "privacy policy",
				url: "#",
			},
			{
				name: "terms of service",
				url: "#",
			},
			{
				name: "law enforcement",
				url: "#",
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className=" bg-darkBlue text-white">
			<div className="py-8 px-4 md:px-8 md:py-12 lg:px-16">
				<div className="flex flex-wrap gap-4 gap-y-8 pb-4 md:pb-6 lg:pb-8">
					{links.map(({ title, urls }) => (
						<div key={title} className=" space-y-4 md:space-y-6 flex-1 basis-[10rem]">
							<h3 className="font-semibold text-md capitalize">{title}</h3>
							<div className=" flex flex-col gap-y-4 ">
								{urls.map(({ name, url }) => (
									<Link key={"footer" + name} className=" capitalize text-sm" href={url}>
										{name}
									</Link>
								))}
							</div>
						</div>
					))}
					{/* <div className="space-y-4 md:space-y-6 flex-1 basis-[10rem]">
						<h3 className="font-semibold text-md capitalize">Install App</h3>
						<div className="flex flex-col gap-y-4 lg:gap-y-8">
							<Link href={"#"}>
								<Image
									src="/images/svgs/play-store.svg"
									width={100}
									height={10}
									className=" object-cover "

								/>
							</Link>
							<Link href={"#"}>
								<Image
									src="/images/svgs/ios-store.svg"
									width={100}
									height={10}
								/>
							</Link>
						</div>
					</div> */}
				</div>
				<aside className=" border-t border-t-gray-300 py-2 md:py-4 flex flex-col md:flex-row md:justify-between gap-3">
					<p className=" text-sm">© 2023 Landboo. All rights reserved</p>
					<div className=" flex gap-2 lg:gap-4">
						<i className="bg-gray-800 p-1 md:p-2 rounded-full">
							<AiOutlineInstagram className="w-5 h-5  lg:w-6 lg:h-6" />
						</i>
						<i className="bg-gray-800 p-1 md:p-2 rounded-full">
							<AiOutlineDribbble className="w-5 h-5 lg:w-6 lg:h-6" />
						</i>
						<i className="bg-gray-800 p-1 md:p-2 rounded-full">
							<AiOutlineTwitter className="w-5 h-5 lg:w-6 lg:h-6" />
						</i>
						<i className="bg-gray-800 p-1 md:p-2 rounded-full">
							<AiOutlineYoutube className="w-5 h-5 lg:w-6 lg:h-6" />
						</i>
					</div>
				</aside>
			</div>
		</footer>
	);
};

export default Footer;
