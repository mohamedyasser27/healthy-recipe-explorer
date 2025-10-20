"use client";
import { useModal } from "@/components/providers/modal-provider";
import { useSearchResult } from "@/components/providers/search-result-provider";
import { RecipeDetailsModal } from "@/components/SearchResult/RecipeDetailsModal";
import { SearchResultEmpty } from "@/components/SearchResult/SearchResultEmpty";
import { SearchResultIntro } from "@/components/SearchResult/SearchResultIntro";
import {
	SearchResultGridSkeleton,
	SearchResultView,
} from "@/components/SearchResult/SearchResultView";

export const SearchResult = () => {
	const { hasInput, recipes, loading } = useSearchResult();
	const { selectedRecipe, isModalOpen, closeModal } = useModal();

	const handleCloseModal = () => {
		closeModal();
	};

	if (!hasInput) {
		return <SearchResultIntro />;
	}
	if (loading) {
		return <SearchResultGridSkeleton />;
	}

	if (recipes.length === 0) {
		return <SearchResultEmpty />;
	}

	return (
		<>
			<SearchResultView recipes={recipes} />
			<RecipeDetailsModal
				recipe={selectedRecipe}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</>
	);
};
