import { useBirthdayStore } from "../../store/birthdayStore";

export const Birthday = () => {
	const { birthday, check } = useBirthdayStore();

	if (birthday) return null;

	const handleClick = () => {
		check();
	};

	return (
		<article className="birthday">
			<h1>Привет. Я Ларри 📱</h1>
			<p className="talk">Да, у бежевого экрана есть имя. Какие-то проблемы?</p>

			<div>
				<p className="p">
					Понимаю ваше недоумение. Если по какой-то причине вы решили зайти
					сюда, то это значит лишь одно!
				</p>
				<p className="p">Или другое. Не важно.</p>
				<p className="p">
					Я не отниму у вас много времени. Сегодня вы видите меня по одной
					простой, но бесконечно важной причине - у <b>Лизоньки</b> день
					рождения!
				</p>
				<p className="p">
					Все мы знаем <b>Лизоньку</b>. Да ведь? (если нет - встал и вышел
					отседова) Светлый и прекрасный человечек, озаряющий светом всех
					окружающих её людей.
				</p>
				<p className="p">
					Давайте поздравим её с этим замечательным днём. Я люблю тебя,{" "}
					<b>Шарапова Елизавета Андреевна</b> 💖 <br /> (Бежевые экраны тоже
					могут любить)
				</p>
			</div>

			<button type="button" className="button" onClick={handleClick}>
				С днём рождения! 🎉
			</button>
		</article>
	);
};
