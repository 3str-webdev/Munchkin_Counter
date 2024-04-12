type CounterProps = {
	title: string;
	value: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

export const Counter = ({
	title,
	value,
	increment,
	decrement,
	reset,
}: CounterProps) => {
	return (
		<div className="counter">
			<div className="result">{value}</div>
			<div className="controlls">
				<button type="button" className="btn down" onClick={decrement}>
					<i className="bx bxs-down-arrow" />
				</button>
				<h3>{title}</h3>
				<button type="button" className="btn up" onClick={increment}>
					<i className="bx bxs-up-arrow" />
				</button>
			</div>
			<button type="button" className="reset btn" onClick={reset}>
				Сброс
			</button>
		</div>
	);
};
