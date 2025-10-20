import "./globals.css";

import { Montserrat } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SearchResultProvider } from "@/components/providers/search-result-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-montserrat",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${montserrat.variable}`}
			suppressHydrationWarning
		>
			<head>
				<meta name="apple-mobile-web-app-title" content="healthy recipe" />
			</head>
			<body className="transition-colors">
				<ThemeProvider
					disableTransitionOnChange={false}
					attribute="class"
					defaultTheme="system"
					enableSystem
				>
					<ModalProvider>
						<SearchResultProvider>
							<Navbar />
							{children}
						</SearchResultProvider>
					</ModalProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
