/**
 * API endpoints for recipes
 */

import { Recipe } from "@/types";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

//eslint-disable-next-line
function extractIngredients(meal: any): string[] {
	const ingredients: string[] = [];

	for (let i = 1; i <= 20; i++) {
		const ingredient = meal[`strIngredient${i}`];
		const measure = meal[`strMeasure${i}`];

		if (ingredient && ingredient.trim()) {
			const ingredientText =
				measure && measure.trim()
					? `${measure.trim()} ${ingredient.trim()}`
					: ingredient.trim();
			ingredients.push(ingredientText);
		}
	}

	return ingredients;
}

export async function searchRecipes(term: string): Promise<Recipe[]> {
	const res = await fetch(`${BASE_URL}search.php?s=${term}`);
	const data = await res.json();

	if (!data.meals) {
		return [];
	}

	//eslint-disable-next-line
	return data.meals.map((meal: any) => ({
		id: meal.idMeal,
		name: meal.strMeal,
		image: meal.strMealThumb,
		category: meal.strCategory,
		ingredients: extractIngredients(meal),
		instructions: meal.strInstructions || "No instructions available",
	}));
}

export async function getRecipeById(id: string) {
	const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
	const data = await res.json();
	return data.meals?.[0] || null;
}
