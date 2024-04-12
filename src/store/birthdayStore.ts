import { storageConfig } from "@/config/storageConfig";
import dayjs from "dayjs";
import { create } from "zustand";
import { saveInStorage } from "./middleware/storageMiddleware";

type BirthdayStore = {
	birthday: boolean;
	check: () => void;
};

const birthdayAlias: storageConfig = storageConfig.birthdayAlias;

const initialCache = localStorage[birthdayAlias];

const getInitialCheckedStatus = () => {
	const isApril = dayjs().month() === 3;
	const is9th = dayjs().date() === 9;
	const isBirthday = isApril && is9th;

	if (!isBirthday) return true;

	return false;
};

export const useBirthdayStore = create<BirthdayStore>(
	saveInStorage(
		(set: (birthday: { birthday: boolean }) => unknown) => ({
			birthday:
				initialCache !== undefined
					? JSON.parse(initialCache)
					: getInitialCheckedStatus(),
			check: () => set({ birthday: true }),
		}),
		{
			alias: birthdayAlias,
		},
	),
);
