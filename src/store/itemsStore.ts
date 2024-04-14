import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ItemsStore = {
	items: number;
	incrementItems: () => void;
	decrementItems: () => void;
	resetItems: () => void;
};

const itemsAlias = storageConfig.itemsAlias;

export const useItemsStore = create<ItemsStore>()(
	persist(
		(set) => ({
			items: 0,
			incrementItems: () => set((state) => ({ items: state.items + 1 })),
			decrementItems: () => set((state) => ({ items: state.items - 1 })),
			resetItems: () => set(() => ({ items: 0 })),
		}),
		{
			name: itemsAlias,
		},
	),
);
