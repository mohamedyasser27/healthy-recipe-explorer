import {
	SearchResultCard,
	SearchResultCardSkeleton,
} from "@/components/SearchResult/SearchResultCard";
import { Recipe } from "@/types";

const SearchResultGrid = ({ recipes }: { recipes: Recipe[] }) => (
	<div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:grid-cols-3 xl:grid-cols-4">
		{recipes.map((recipe) => (
			<SearchResultCard key={recipe.id} recipe={recipe} />
		))}
	</div>
);
export const SearchResultGridSkeleton = () => (
	<div className="flex h-full flex-col items-start gap-4">
		<div>
			<h1 className="text-4xl font-bold">Search Results</h1>
			<p className="text-muted-foreground text-lg">
				Search results for your query
			</p>
		</div>
		<div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:grid-cols-3 xl:grid-cols-4">
			<SearchResultCardSkeleton />
			<SearchResultCardSkeleton />
			<SearchResultCardSkeleton />
			<SearchResultCardSkeleton />
			<SearchResultCardSkeleton />
			<SearchResultCardSkeleton />
		</div>
	</div>
);
export const SearchResultView = ({ recipes }: { recipes: Recipe[] }) => (
	<div className="flex h-full flex-col items-start gap-4">
		<div>
			<h1 className="text-4xl font-bold">Search Results</h1>
			<p className="text-muted-foreground text-lg">
				Search results for your query
			</p>
		</div>
		<SearchResultGrid recipes={recipes} />
	</div>
);
