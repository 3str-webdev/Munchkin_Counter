import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { saveInStorage } from "./middleware/storageMiddleware";

type ItemsStore = {
	items: number;
	incrementItems: () => void;
	decrementItems: () => void;
	resetItems: () => void;
};

const itemsAlias = storageConfig.itemsAlias;

const initialCache = localStorage[itemsAlias];

export const useItemsStore = create<ItemsStore>(
	saveInStorage(
		(set) => ({
			items: initialCache !== undefined ? JSON.parse(initialCache) : 0,
			incrementItems: () => set((state) => ({ items: state.items + 1 })),
			decrementItems: () => set((state) => ({ items: state.items - 1 })),
			resetItems: () => set(() => ({ items: 0 })),
		}),
		{
			alias: itemsAlias,
		},
	),
);
