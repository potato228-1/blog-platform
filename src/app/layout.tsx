import "./globals.css";

import type { Metadata } from "next";
import BlogHeader from "@/components/BlogHeader/BlogHeader";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({
	display: "swap",
    subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "The Blog",
	description: "The Blog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	return (
		<html lang="en" className={[inter.className,].join(' ')}>
			<body>
				<div className="mainContainer">
					<BlogHeader />
					{children}
                    <Footer/>
				</div>
			</body>
		</html>
	);
}
