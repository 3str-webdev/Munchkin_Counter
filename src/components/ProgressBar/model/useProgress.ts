import { useNow } from "@/shared/hooks/useNow";

export const useProgress = (duration: number, delay: number) => {
	const { startAt, now } = useNow({ delay });

	const progress = ((now - startAt) / duration) * 100;

	return progress;
};
