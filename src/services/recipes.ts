/**
 * API endpoints for recipes
 */

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export async function searchRecipes(term: string) {
	const res = await fetch(`${BASE_URL}search.php?s=${term}`);
	const data = await res.json();
	return data.meals || [];
}

export async function getRecipeById(id: string) {
	const res = await fetch(`${BASE_URL}lookup.php?i=${id}`);
	const data = await res.json();
	return data.meals?.[0] || null;
}
