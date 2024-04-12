import { Input, Modal } from "@/components/ui";
import { useSideCountStore } from "@/store/sideStore";
import { type ChangeEvent, useEffect, useRef, useState } from "react";

export const SideCount = () => {
	const { side, setCount, resetCount } = useSideCountStore();
	const [inputValue, setInputValue] = useState("");
	const [isOpenModal, setIsOpenModal] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isOpenModal && inputRef.current) {
			inputRef.current.focus();
		}
	}, [isOpenModal]);

	const handleClickSideCountBtn = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
		setInputValue("");
	};

	const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		if (/^-?\d*\.?\d*$/.test(value)) {
			setInputValue(value);
		}
	};

	const handleClickSaveCount = () => {
		setCount(Number(inputValue));
		handleCloseModal();
	};

	const handleClickResetCount = () => {
		resetCount();
		handleCloseModal();
	};

	return (
		<section className="side-count__wrapper">
			<button
				type="button"
				className="side-count__btn btn"
				onClick={handleClickSideCountBtn}
			>
				Модификаторы
			</button>
			<Modal
				isOpen={isOpenModal}
				onClose={handleCloseModal}
				onOverlayClick={handleCloseModal}
			>
				<Modal.Header>Модификаторы</Modal.Header>
				<Modal.Body className="side-count__modal__body">
					<Input
						placeholder={String(side)}
						inputMode="numeric"
						className="side-count__modal__input"
						value={inputValue}
						onChange={handleChangeInput}
						ref={inputRef}
					/>
				</Modal.Body>
				<Modal.Footer>
					<div className="side-count__modal__actions">
						<button
							type="button"
							className="btn"
							onClick={handleClickResetCount}
						>
							Сбросить
						</button>
						<button
							type="button"
							className="btn"
							onClick={handleClickSaveCount}
						>
							Сохранить
						</button>
					</div>
				</Modal.Footer>
			</Modal>
		</section>
	);
};
