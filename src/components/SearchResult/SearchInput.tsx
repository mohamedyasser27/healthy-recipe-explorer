import { SearchIcon } from "lucide-react";
import { useCallback, useRef } from "react";

import { useSearchResult } from "@/components/providers/search-result-provider";
import { Input } from "@/components/ui/input";
import { useGetRecipes } from "@/hooks/useSearchResults";

export const SearchInput = () => {
	const { setHasInput, setLoading, setRecipes, recipes, hasInput, loading } =
		useSearchResult();
	const { getRecipes } = useGetRecipes();
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const handleSearch = useCallback(
		async (e: React.ChangeEvent<HTMLInputElement>) => {
			const searchTerm = e.target.value.trim();

			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}

			if (searchTerm.length === 0) {
				setHasInput(false);
				setRecipes([]);
				setLoading(false);
				return;
			}

			setHasInput(true);
			setLoading(true);

			timeoutRef.current = setTimeout(async () => {
				try {
					const recipes = await getRecipes(searchTerm);
					setRecipes(recipes);
				} catch (error) {
					console.error("Error searching recipes:", error);
					setRecipes([]);
				} finally {
					setLoading(false);
				}
			}, 500);
		},
		[getRecipes, setHasInput, setLoading, setRecipes]
	);
	return (
		<Input
			type="search"
			placeholder="Search"
			name="search"
			id="search"
			autoComplete="off"
			LeftIcon={<SearchIcon className="size-4" />}
			onChange={handleSearch}
			aria-invalid={!loading && hasInput && recipes.length === 0}
			className="border-primary/30 max-w-xl rounded-full border"
		/>
	);
};
