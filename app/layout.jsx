import { Inter } from "next/font/google";
import Header from "./components/Header";

import "swiper/css"
import "swiper/css/autoplay"
import 'swiper/css/grid';
import "swiper/css/pagination"
import "./main.scss";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Jrosy Homes",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
			<link rel='icon' href='/images/logo.svg' sizes="any"/>
			</head>
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
