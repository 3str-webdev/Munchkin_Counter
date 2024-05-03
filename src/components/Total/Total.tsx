import { Gender } from "@/components/Gender";
import { useCounter } from "@/shared/hooks/use-counter";

export const Total = () => {
	const { level, items, modification } = useCounter();

	const isShowModification = modification !== 0;
	const modificationSymbol = modification > 0 ? "+" : "";

	return (
		<div className="total">
			<div className="result">
				{isShowModification && (
					<div className="side-badge">
						{modificationSymbol}
						{modification}
					</div>
				)}
				<div className="total__value">{level + items + modification}</div>
			</div>
			<Gender />
		</div>
	);
};
