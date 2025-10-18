"use client";
import { SearchIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ThemeToggle = dynamic(
	() => import("@/components/ThemeToggle").then((mod) => mod.ThemeToggle),
	{
		ssr: false,
		loading: () => <Button className="animate-pulse" disabled size="icon" />,
	}
);

// const NavbarLinks = ({ className }: { className?: string }) => {
// 	const pathname = usePathname();
// 	const links = [
// 		{ href: "/Beef", label: "Beef" },
// 		{ href: "/Chicken", label: "Chicken" },
// 	];
// 	return (
// 		<ul className={clsx("flex items-center gap-2", className)}>
// 			{links.map((link) => (
// 				<Button
// 					asChild
// 					key={link.href}
// 					variant={pathname === link.href ? "outline" : "default"}
// 				>
// 					<li>
// 						<Link href={link.href}>{link.label}</Link>
// 					</li>
// 				</Button>
// 			))}
// 		</ul>
// 	);
// };

export const Navbar = () => (
	<nav className="border-border border-b p-4 shadow-sm md:px-0">
		<div className="container mx-auto flex items-center gap-4">
			<Link href="/">
				<Logo className="text-primary" />
			</Link>
			<Input
				type="search"
				placeholder="Search"
				name="search"
				id="search"
				LeftIcon={<SearchIcon className="size-4" />}
				className="border-primary/30 max-w-xl rounded-full border"
			/>
			<div className="ms-auto flex items-center gap-4">
				<ThemeToggle />
			</div>
		</div>
	</nav>
);
