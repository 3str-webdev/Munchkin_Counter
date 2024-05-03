import { useCountersStore } from "@/store/counters-store";
import type { HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import { CounterItem } from "./counter-item";
import { twJoin } from "tailwind-merge";

type CountersListProps = HTMLAttributes<HTMLUListElement>;

export const CountersList = ({ className, ...props }: CountersListProps) => {
	const counters = useCountersStore((store) => store.counters);

	return (
		<ul
			{...props}
			className={twJoin("grid gap-3 overflow-x-hidden", className)}
		>
			{counters.map((counter) => {
				return (
					<NavLink to={`counter/${counter.id}`} key={counter.id}>
						<CounterItem counter={counter} />
					</NavLink>
				);
			})}
		</ul>
	);
};
