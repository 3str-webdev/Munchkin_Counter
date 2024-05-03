import { Birthday } from "@/components/Birthday";
import { Controls } from "@/components/Controls";
import { Drawer } from "@/components/Drawer";
import { Random } from "@/components/Random";
import { SideCount } from "@/components/ModificationCount";
import { Total } from "@/components/Total";

export const CounterPage = () => {
	return (
		<div className="App">
			<header className="header">
				<SideCount />
				<Random />
			</header>
			<Total />
			<Controls />
			<Birthday />
			<Drawer />
		</div>
	);
};
