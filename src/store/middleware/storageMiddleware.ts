import type { storageConfig } from "@/config/storageConfig";

type SaveInStorageOptions = {
	alias: storageConfig;
};

export const saveInStorage =
	(config, options: SaveInStorageOptions) => (set, get, api) =>
		config(
			(...args) => {
				set(...args);
				console.log(JSON.stringify(get()[options.alias]));
				localStorage.setItem(
					options.alias,
					JSON.stringify(get()[options.alias]),
				);
			},
			get,
			api,
		);
