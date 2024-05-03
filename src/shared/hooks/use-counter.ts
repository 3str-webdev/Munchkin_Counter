import { getDefaultCounter, useCountersStore } from "@/store/counters-store";
import { useNavigate } from "react-router-dom";
import { useCounterId } from "./use-counter-id";

export const useCounter = () => {
	const id = useCounterId();
	const navigate = useNavigate();
	const counters = useCountersStore((store) => store.counters);

	const counter = counters.find((counter) => counter.id === id);

	if (!counter) {
		navigate("/");
		return getDefaultCounter();
	}

	return counter;
};
