"use client";

import { createContext, useContext, useState } from "react";

import { Recipe } from "@/types";

interface ModalContextType {
	selectedRecipe: Recipe | null;
	isModalOpen: boolean;
	openModal: (recipe: Recipe) => void;
	closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
	const context = useContext(ModalContext);
	if (context === undefined) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};

interface ModalProviderProps {
	children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
	const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = (recipe: Recipe) => {
		setSelectedRecipe(recipe);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedRecipe(null);
	};

	return (
		<ModalContext.Provider
			value={{
				selectedRecipe,
				isModalOpen,
				openModal,
				closeModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
};
