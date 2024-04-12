import { storageConfig } from "@/config/storageConfig";
import { create } from "zustand";
import { saveInStorage } from "./middleware/storageMiddleware";

type IconsSet = {
	type: 1 | 2;
	male: string;
	female: string;
};

type IconsStore = {
	icons: IconsSet;
	switchIcons: () => void;
};

const iconsAlias = storageConfig.iconsAlias;

const initialCache = localStorage[iconsAlias];

export const useIconsStore = create<IconsStore>(
	saveInStorage(
		(
			set: (
				arg0: (store: IconsStore) => {
					icons: IconsSet;
				},
			) => void,
		) => ({
			icons:
				initialCache !== undefined
					? JSON.parse(initialCache)
					: { type: 1, male: "bx bx-male", female: "bx bx-female" },
			switchIcons: () =>
				set((store: { icons: IconsSet }) => {
					if (store.icons.type === 1) {
						return {
							icons: {
								type: 2,
								male: "bx bx-male-sign",
								female: "bx bx-female-sign",
							},
						};
					}

					return {
						icons: { type: 1, male: "bx bx-male", female: "bx bx-female" },
					};
				}),
		}),
		{
			alias: iconsAlias,
		},
	),
);
