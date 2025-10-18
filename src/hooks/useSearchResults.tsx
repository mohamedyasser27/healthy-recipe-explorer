import { searchRecipes } from "@/services/recipes";

export const useGetRecipes = () => {
	const getRecipes = async (term: string) => {
		const recipes = await searchRecipes(term);
		return recipes;
	};
	return { getRecipes };
};
