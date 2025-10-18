import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton";
import { Recipe } from "@/types";
export const SearchResultCardSkeleton = () => (
	<div className="overflow-hidden rounded-lg bg-white shadow-md">
		<Skeleton className="h-48 w-full" />
		<div className="p-4">
			<Skeleton className="mb-2 h-6 w-20 rounded-full" />
			<Skeleton className="h-6 w-3/4" />
		</div>
	</div>
);

export const SearchResultCard = ({ recipe }: { recipe: Recipe }) => (
	<div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:-rotate-1 hover:scale-105 hover:shadow-xl">
		<div className="relative h-48 w-full overflow-hidden">
			<Image
				src={recipe.image}
				alt={recipe.name}
				className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
				width={300}
				height={192}
			/>
		</div>
		<div className="p-4">
			<div className="mb-2">
				<span className="text-accent inline-block rounded-full px-3 py-1 text-sm font-medium">
					{recipe.category}
				</span>
			</div>
			<h2 className="group-hover:text-primary text-xl font-bold text-gray-900 transition-colors duration-300">
				{recipe.name}
			</h2>
		</div>
	</div>
);
