import { useEffect, useLayoutEffect, useState } from "react";

type UseNowOption = {
	delay: number;
};

type UseNowResponse = {
	now: number;
	startAt: number;
};

export const useNow = ({ delay }: UseNowOption): UseNowResponse => {
	const [now, setNow] = useState<number>(Date.now());
	const [startAt, setStartAt] = useState<number>(Date.now());

	useEffect(() => {
		setStartAt(Date.now());
	}, []);

	useLayoutEffect(() => {
		setNow(Date.now());

		const interval = setInterval(() => {
			setNow(Date.now());
		}, delay);

		return () => {
			clearInterval(interval);
		};
	}, [delay]);

	return {
		now,
		startAt,
	};
};
