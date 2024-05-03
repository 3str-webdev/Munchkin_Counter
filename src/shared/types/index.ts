export type CounterType = {
	id: string;
	items: number;
	level: number;
	modification: number;
	isMale: boolean;
	icons: IconsSet;
	date: string;
};

export type IconsSet = {
	type: 1 | 2;
	male: "bx bx-male" | "bx bx-male-sign";
	female: "bx bx-female" | "bx bx-female-sign";
};
