import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { saveInStorage } from "./middleware/storageMiddleware";

type GenderStore = {
	isMale: boolean;
	changeGender: () => void;
};

const genderAlias = storageConfig.genderAlias;

const initialCache = localStorage[genderAlias];

export const useGenderStore = create<GenderStore>(
	saveInStorage(
		(set: (arg0: (store: GenderStore) => { isMale: boolean }) => void) => ({
			isMale: initialCache !== undefined ? JSON.parse(initialCache) : true,
			changeGender: () =>
				set((store: GenderStore) => ({ isMale: !store.isMale })),
		}),
		{
			alias: genderAlias,
		},
	),
);
