import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type GenderStore = {
	isMale: boolean;
	changeGender: () => void;
};

const genderAlias = storageConfig.genderAlias;

export const useGenderStore = create<GenderStore>()(
	persist(
		(set) => ({
			isMale: true,
			changeGender: () =>
				set((store: GenderStore) => ({ isMale: !store.isMale })),
		}),
		{
			name: genderAlias,
		},
	),
);
