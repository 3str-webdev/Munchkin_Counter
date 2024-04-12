import { useProgress } from "@/hooks/useProgress";
import { useEffect } from "react";

type ProgressBarProps = {
	duration: number;
	delay: number;
	onFinish: () => void;
};

export const ProgressBar = ({
	duration,
	delay,
	onFinish,
}: ProgressBarProps) => {
	const width = useProgress(duration, delay);
	const widthPercentage = `${width}%`;

	useEffect(() => {
		if (width <= 0) {
			onFinish();
		}
	}, [onFinish, width]);

	return <div className="progress" style={{ width: widthPercentage }} />;
};
