"use client";

import Image from "next/image";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Recipe } from "@/types";

interface RecipeDetailsModalProps {
	recipe: Recipe | null;
	isOpen: boolean;
	onClose: () => void;
}

interface RecipeModalHeaderProps {
	recipe: Recipe;
}

interface RecipeModalContentProps {
	recipe: Recipe;
}

interface RecipeModalSourceProps {
	recipe: Recipe;
}

const RecipeModalHeader = ({ recipe }: RecipeModalHeaderProps) => (
	<div className="relative h-64 w-full overflow-hidden">
		<Image
			src={recipe.image}
			alt={recipe.name}
			className="h-full w-full object-cover"
			width={800}
			height={256}
		/>
		<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
		<div className="absolute bottom-4 left-4 text-white">
			<span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm">
				{recipe.category}
			</span>
			<h1 className="mt-2 text-3xl font-bold">{recipe.name}</h1>
		</div>
	</div>
);

const RecipeModalContent = ({ recipe }: RecipeModalContentProps) => (
	<div className="grid gap-8 lg:grid-cols-2">
		{/* Ingredients */}
		<div>
			<h2 className="mb-4 text-2xl font-bold text-gray-900">Ingredients</h2>
			<ul className="space-y-2">
				{recipe.ingredients.map((ingredient, index) => (
					<li key={index} className="flex items-start">
						<span className="bg-primary mr-3 mt-1.5 h-2 w-2 flex-shrink-0 rounded-full" />
						<span className="text-gray-700">{ingredient}</span>
					</li>
				))}
			</ul>
		</div>

		{/* Instructions */}
		<div>
			<h2 className="mb-4 text-2xl font-bold text-gray-900">Instructions</h2>
			<div className="prose prose-gray max-w-none">
				<p className="whitespace-pre-wrap leading-relaxed text-gray-700">
					{recipe.instructions}
				</p>
			</div>
		</div>
	</div>
);

const RecipeModalSource = ({ recipe }: RecipeModalSourceProps) => (
	<div className="mt-8 border-t py-6">
		<div className="flex items-center justify-between">
			<div>
				<h3 className="text-lg font-semibold text-gray-900">Recipe Source</h3>
				<p className="text-sm text-gray-600">
					This recipe is provided by TheMealDB API
				</p>
			</div>
			<a
				href={`https://www.themealdb.com/meal/${recipe.id}`}
				target="_blank"
				rel="noopener noreferrer"
				className="bg-primary hover:bg-primary/90 rounded-lg px-4 py-2 text-white transition-colors"
			>
				View Original
			</a>
		</div>
	</div>
);

export const RecipeDetailsModal = ({
	recipe,
	isOpen,
	onClose,
}: RecipeDetailsModalProps) => {
	if (!recipe) return null;

	const handleOpenChange = (open: boolean) => {
		if (!open) onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={handleOpenChange}>
			<DialogContent className="max-h-[90vh] max-w-4xl overflow-hidden bg-white p-0">
				<DialogTitle className="sr-only">Recipe Details</DialogTitle>
				<RecipeModalHeader recipe={recipe} />

				<div className="max-h-[calc(90vh-16rem)] overflow-y-auto p-6">
					<RecipeModalContent recipe={recipe} />
					<RecipeModalSource recipe={recipe} />
				</div>
			</DialogContent>
		</Dialog>
	);
};
