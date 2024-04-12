import { Gender } from "@/components/Gender";
import { useItemsStore } from "@/store/itemsStore";
import { useLevelStore } from "@/store/levelStore";
import { useSideCountStore } from "@/store/sideStore";

export const Total = () => {
	const level = useLevelStore((store) => store.level);
	const items = useItemsStore((store) => store.items);
	const side = useSideCountStore((store) => store.side);

	const isShowSide = side !== 0;
	const sideSymbol = side > 0 ? "+" : "";

	return (
		<div className="total">
			<div className="result">
				{isShowSide && (
					<div className="side-badge">
						{sideSymbol}
						{side}
					</div>
				)}
				<div className="total__value">{level + items + side}</div>
			</div>
			<Gender />
		</div>
	);
};
