"use client";
import { createContext, ReactNode, useContext, useState } from "react";

import { Recipe } from "@/types";

type SearchResultContextType = {
	recipes: Recipe[];
	hasInput: boolean;
	loading: boolean;
	setLoading: (value: boolean) => void;
	setHasInput: (value: boolean) => void;
	setRecipes: (value: Recipe[]) => void;
};

const SearchResultContext = createContext<SearchResultContextType | undefined>(
	undefined
);

export const SearchResultProvider = ({ children }: { children: ReactNode }) => {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [hasInput, setHasInput] = useState(false);
	const [loading, setLoading] = useState(false);
	return (
		<SearchResultContext.Provider
			value={{
				recipes,
				hasInput,
				setHasInput,
				setRecipes,
				loading,
				setLoading,
			}}
		>
			{children}
		</SearchResultContext.Provider>
	);
};

export const useSearchResult = () => {
	const context = useContext(SearchResultContext);
	if (!context) {
		throw new Error(
			"useSearchResult must be used within a SearchResultProvider"
		);
	}
	return context;
};
