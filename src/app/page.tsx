import { searchRecipes } from "@/services/recipes";

export default async function Home() {
	const recipes = await searchRecipes("chicken");
	return (
		<main>
			<pre>{JSON.stringify(recipes, null, 2)}</pre>
		</main>
	);
}
