import { AddCounterButton } from "@/features/add-counter";
import { CountersList } from "@/features/counters-list";
import { useCountersStore } from "@/store/counters-store";

export const IndexPage = () => {
	const counters = useCountersStore((store) => store.counters);
	const amountOfCounters = counters.length;

	return (
		<section className="w-full self-start pt-[40px] px-3">
			<h1 className="text-2xl">Счётчики</h1>
			<p>{amountOfCounters} / 10</p>

			<CountersList className="mt-4" />

			{amountOfCounters < 10 && <AddCounterButton />}
		</section>
	);
};
