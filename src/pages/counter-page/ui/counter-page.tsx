import { Birthday } from "@/components/Birthday";
import { Controls } from "@/components/Controls";
import { Drawer } from "@/components/Drawer";
import { SideCount } from "@/components/ModificationCount";
import { Class, Race } from "@/components/MunchkinInfo";
import { Random } from "@/components/Random";
import { Total } from "@/components/Total";
import { twJoin } from "tailwind-merge";

export const CounterPage = () => {
	return (
		<div className="App">
			<header
				className={twJoin(
					"fixed top-0 left-0 w-full",
					"grid z-10 gap-3",
					"px-5 py-4",
				)}
			>
				<div className={twJoin("flex justify-between items-center")}>
					<SideCount />
					<Random />
				</div>
				<div className="grid justify-between">
					<Race />
					<Class />
				</div>
			</header>
			<Total />
			<Controls />
			<Birthday />
			<Drawer />
		</div>
	);
};
