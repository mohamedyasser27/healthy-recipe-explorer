"use client";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
interface ThemeToggleProps {
	className?: string;
}

/**
 *  must be lazy loaded to avoid hydration problem because we can't know theme on server
 *  please refer to `src/components/navbar` for usage
 */
export const ThemeToggle = ({ className }: ThemeToggleProps) => {
	const { theme, setTheme } = useTheme();

	const handleToggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	return (
		<Button size="icon" onClick={handleToggleTheme} className={className}>
			{theme === "dark" ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
};
