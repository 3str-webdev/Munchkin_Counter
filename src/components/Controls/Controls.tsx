import { Counter } from "@/components/Counter";
import { useItemsStore } from "@/store/itemsStore";
import { useLevelStore } from "@/store/levelStore";

export const Controls = () => {
	const { level, incrementLevel, decrementLevel, resetLevel } = useLevelStore(
		(store) => store,
	);

	const { items, incrementItems, decrementItems, resetItems } = useItemsStore(
		(store) => store,
	);

	return (
		<div className="counters">
			<Counter
				title={"Уровень"}
				value={level}
				increment={incrementLevel}
				decrement={decrementLevel}
				reset={resetLevel}
			/>
			<Counter
				title={"Шмотки"}
				value={items}
				increment={incrementItems}
				decrement={decrementItems}
				reset={resetItems}
			/>
		</div>
	);
};
