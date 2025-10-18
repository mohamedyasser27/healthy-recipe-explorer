"use client";
import { useSearchResult } from "@/components/providers/search-result-provider";
import { SearchResultEmpty } from "@/components/SearchResult/SearchResultEmpty";
import { SearchResultIntro } from "@/components/SearchResult/SearchResultIntro";
import {
	SearchResultGridSkeleton,
	SearchResultView,
} from "@/components/SearchResult/SearchResultView";

export const SearchResult = () => {
	const { hasInput, recipes, loading } = useSearchResult();
	if (!hasInput) {
		return <SearchResultIntro />;
	}
	if (loading) {
		return <SearchResultGridSkeleton />;
	}

	if (recipes.length === 0) {
		return <SearchResultEmpty />;
	}
	return <SearchResultView recipes={recipes} />;
};
