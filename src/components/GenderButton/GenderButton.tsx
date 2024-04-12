import { useGenderStore } from "@/store/genderStore";
import { useIconsStore } from "@/store/iconsStore";

export const GenderButton = () => {
	const { isMale, changeGender } = useGenderStore((store) => store);
	const icons = useIconsStore((store) => store.icons);

	return (
		<>
			<button
				type="button"
				className={`${isMale ? "male " : "female "}btn`}
				onClick={changeGender}
			>
				<i className={isMale ? icons.male : icons.female} />
			</button>
		</>
	);
};
