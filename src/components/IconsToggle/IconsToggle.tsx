import { useIconsStore } from "@/store/iconsStore";

export const IconsToggle = () => {
	const { icons, switchIcons } = useIconsStore((store) => store);

	return (
		<>
			<input
				type="checkbox"
				id="switchIcons"
				defaultChecked={icons.type === 1}
				hidden
			/>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<label
				className="iconsToggle"
				htmlFor="switchIcons"
				onClick={switchIcons}
			/>
		</>
	);
};
