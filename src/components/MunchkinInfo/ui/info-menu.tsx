import { MCSwitch } from "@/components/ui";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { twJoin } from "tailwind-merge";

type InfoMenuProps = {
	value: string[];
	items: string[];
	onChange: (value: string, isChecked: boolean) => void;
};

export const InfoMenu = ({ value, items, onChange }: InfoMenuProps) => {
	return (
		<Popover>
			<Popover.Button
				className={twJoin(
					"text-lg outline-none",
					"underline underline-offset-4 decoration-primary-500",
				)}
			>
				{value.join(" + ")}
			</Popover.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel
					className={twJoin(
						"absolute z-10 mt-3",
						"bg-neutral-900 p-2",
						"border-[1px] border-primary-500",
					)}
				>
					<ul className="grid gap-2">
						{items.map((item) => {
							const isChecked = value.includes(item);

							return (
								<li key={item}>
									<button
										type="button"
										onClick={() => onChange(item, !isChecked)}
										className="flex w-full gap-5 items-center justify-between"
									>
										{item}
										<MCSwitch className="scale-75" checked={isChecked} />
									</button>
								</li>
							);
						})}
					</ul>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
