import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { twJoin } from "tailwind-merge";
import { MCSwitch } from "../ui";
import { NavLink } from "react-router-dom";

export const Drawer = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [design, setDesign] = useState<boolean>(false);

	const handleClickDrawerOpenButton = () => {
		setIsOpen(true);
	};

	console.log(isOpen);

	return (
		<>
			<button
				type="button"
				onClick={handleClickDrawerOpenButton}
				className={twJoin(
					isOpen && "translate-x-full",
					"fixed right-0 translate-x-0 top-1/4 transition-transform",
					"bg-primary-500 text-neutral-900 text-3xl",
					"pt-6 pb-5 px-0 z-[5]",
				)}
			>
				<i className="bx bx-chevron-left" />
			</button>
			<Transition as={Fragment} show={isOpen}>
				<Dialog onClose={() => setIsOpen(false)}>
					<Transition.Child
						as={Fragment}
						unmount={false}
						enter="transition transform ease-out"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transition transform ease-in"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<Dialog.Panel
							className={twJoin(
								"fixed right-0 top-0 h-[100dvh] w-2/3 z-50",
								"bg-neutral-900 border-l-[2px] border-primary-500",
								"flex flex-col gap-4",
								"p-5",
							)}
						>
							<Dialog.Title className={twJoin("text-xl")}>
								Munchkin Counter
							</Dialog.Title>

							<hr />

							<ul className="flex flex-col gap-3 text-md">
								<li>
									<label className="flex justify-between items-center">
										<p>Новый дизайн</p>
										<MCSwitch
											checked={design}
											onChangeToggle={(v) => setDesign(v)}
										/>
									</label>
									<p
										className={twJoin(
											"text-xs text-primary-500 opacity-0 transition-opacity",
											design && "!opacity-55",
										)}
									>
										Погоди, я ещё не сделал
									</p>
								</li>

								<li>
									<NavLink to="/">Мои счётчики</NavLink>
								</li>
							</ul>

							<a
								href="https://t.me/group_3str"
								target="_blank"
								rel="noreferrer"
								className={twJoin("mt-auto underline underline-offset-4")}
							>
								{"Моя группа в tg, welcome :)"}
							</a>
						</Dialog.Panel>
					</Transition.Child>
				</Dialog>
			</Transition>
		</>
	);
};
