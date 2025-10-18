import "./globals.css";

import { Courier_Prime } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";

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
		<html
			lang="en"
			className={`${courierPrime.variable}`}
			suppressHydrationWarning
		>
			<body className="transition-colors">
				<ThemeProvider
					disableTransitionOnChange={false}
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
