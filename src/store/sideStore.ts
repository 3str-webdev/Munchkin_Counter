import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SideStore = {
	side: number;
	setCount: (value: number) => void;
	resetCount: () => void;
};

const sideAlias = storageConfig.sideAlias;

const initialCache = localStorage[sideAlias];

export const useSideCountStore = create<SideStore>()(
	persist(
		(set) => ({
			side: initialCache !== undefined ? JSON.parse(initialCache) : 0,
			setCount: (side) => set(() => ({ side })),
			resetCount: () => set(() => ({ side: 0 })),
		}),
		{
			name: sideAlias,
		},
	),
);
