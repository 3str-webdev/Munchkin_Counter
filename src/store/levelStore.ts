import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type LevelStore = {
	level: number;
	incrementLevel: () => void;
	decrementLevel: () => void;
	resetLevel: () => void;
};

const levelAlias = storageConfig.levelAlias;

export const useLevelStore = create<LevelStore>()(
	persist(
		(set) => ({
			level: 1,
			incrementLevel: () => set((state) => ({ level: state.level + 1 })),
			decrementLevel: () =>
				set((state) => ({ level: Math.max(1, state.level - 1) })),
			resetLevel: () => set(() => ({ level: 1 })),
		}),
		{
			name: levelAlias,
		},
	),
);
