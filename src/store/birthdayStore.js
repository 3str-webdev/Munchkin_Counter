import { create } from "zustand";
import { saveInStorage } from "../middleware/storageMiddleware";
import { storageConfig } from "../config/storageConfig";
import dayjs from "dayjs";

const birthdayAlias = storageConfig.birthdayAlias;

const initialCache = localStorage[birthdayAlias];

const getInitialCheckedStatus = () => {
  const isApril = dayjs().month() === 3;
  const is9th = dayjs().date() === 8; // FIXME: Изменить на 9-е
  const isBirthday = isApril && is9th;

  if (!isBirthday) return true;

  return false;
}

export const useBirthdayStore = create(
  saveInStorage(
    (set) => ({
      birthday: initialCache !== undefined ? JSON.parse(initialCache) : getInitialCheckedStatus(),
      check: () => set({birthday: true})
    }),
    {
      alias: birthdayAlias,
    }
  )
);
