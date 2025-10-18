import * as React from "react";

import { cn } from "@/lib/utils";
interface InputProps extends React.ComponentProps<"input"> {
	LeftIcon?: React.ReactNode;
	RightIcon?: React.ReactNode;
}

/**
 * @param LeftIcon - The left icon to display in the input
 * @param RightIcon - The right icon to display in the input
 * @param className - The class name to apply to the input
 * @param type - The type of the input
 */
function Input({ className, type, LeftIcon, RightIcon, ...props }: InputProps) {
	return (
		<div
			className={cn(
				// Base styles for the container
				"border-input shadow-xs dark:bg-input/30 flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 transition-[color,box-shadow]",

				// Disabled state: Apply styles to the container when the input inside is disabled
				"has-disabled:cursor-not-allowed has-disabled:opacity-50",

				// Focus state: Apply styles to the container when the input inside is focused
				"has-focus-visible:border-ring has-focus-visible:ring-ring/50 has-focus-visible:ring-[3px]",

				// Invalid state: Apply styles to the container when the input inside is invalid
				"has-aria-invalid:border-destructive has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 border",

				// Merge with any external classes
				className
			)}
		>
			{LeftIcon}
			<input
				type={type}
				data-slot="input"
				className={cn(
					// Base styles for the input element itself to fill the container
					"h-full w-full min-w-0 bg-transparent text-base outline-none md:text-sm",

					// Pseudo-element styles that MUST remain on the input
					"placeholder:text-muted-foreground",
					"selection:bg-primary selection:text-primary-foreground",
					"file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium",

					// The input itself should not receive pointer events when disabled
					"disabled:pointer-events-none"
				)}
				{...props}
			/>
			{RightIcon}
		</div>
	);
}

export { Input };
