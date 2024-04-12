import { ProgressBar } from "@/components/ProgressBar";
import { random } from "@/lib/random";
import { useState } from "react";

// Такой формат позволяет ререндерить компонент даже если random вернул такое же число
// Таким образом, например, обновляется прогресс
type RandomValue = {
	value: number | null;
};

const duration = 2000; // 2 sec

export const Random = () => {
	const [randomValue, setRandomValue] = useState<RandomValue>({ value: null });

	const getRandomValue = () => {
		setRandomValue({ value: random(1, 6) });
	};

	const resetRandomValue = () => {
		setRandomValue({ value: null });
	};

	return (
		<section className="randomWrapper">
			<button type="button" className="randomBtn" onClick={getRandomValue}>
				<i className="bx bxs-dice-5" />
			</button>
			{randomValue.value && (
				<div className="value">
					<div className="wrapper">
						{randomValue.value}
						<ProgressBar
							key={Date.now()}
							duration={duration}
							delay={10}
							onFinish={resetRandomValue}
						/>
					</div>
				</div>
			)}
		</section>
	);
};
