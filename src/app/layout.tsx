import "./globals.css";

import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-courier-prime",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={`${courierPrime.variable}`}>
			<body>{children}</body>
		</html>
	);
}
