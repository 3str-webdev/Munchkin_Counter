import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GenderStore = {
	isMale: boolean;
	changeGender: () => void;
};

const genderAlias = storageConfig.genderAlias;

const initialCache = localStorage[genderAlias];

export const useGenderStore = create<GenderStore>()(
	persist(
		(set) => ({
			isMale: initialCache !== undefined ? JSON.parse(initialCache) : true,
			changeGender: () =>
				set((store: GenderStore) => ({ isMale: !store.isMale })),
		}),
		{
			name: genderAlias,
		},
	),
);
