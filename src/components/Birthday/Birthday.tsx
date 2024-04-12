import { useBirthdayStore } from "@/store/birthdayStore";
import { motion } from "framer-motion";

export const Birthday = () => {
	const { birthday, check } = useBirthdayStore();

	if (birthday) return null;

	const handleClick = () => {
		check();
	};

	return (
		<article className="birthday">
			<motion.div
				initial={{ x: 100, opacity: 0 }}
				animate={{
					x: 0,
					opacity: 1,
				}}
			>
				<h1>Привет. Я Ларри 📱</h1>
				<p className="talk">
					Да, у бежевого экрана есть имя. Какие-то проблемы?
				</p>
			</motion.div>

			<motion.p
				className="p"
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.1 }}
			>
				Понимаю ваше недоумение. Если по какой-то причине вы решили зайти сюда,
				то это значит лишь одно!
			</motion.p>

			<motion.p
				className="p"
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.2 }}
			>
				Или другое. Не важно.
			</motion.p>

			<motion.p
				className="p"
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.3 }}
			>
				Я не отниму у вас много времени. Сегодня вы видите меня по одной
				простой, но бесконечно важной причине - у <b>Лизоньки</b> день рождения!
			</motion.p>

			<motion.p
				className="p"
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.4 }}
			>
				Все мы знаем <b>Лизоньку</b>. Да ведь? (если нет - встал и вышел
				отседова) Светлый и прекрасный человечек, озаряющий светом всех
				окружающих её людей.
			</motion.p>

			<motion.p
				className="p"
				initial={{
					x: 200,
					opacity: 0,
				}}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 0.5 }}
			>
				Давайте поздравим её с этим замечательным днём. Я люблю тебя,{" "}
				<b>Шарапова Елизавета Андреевна</b> 💖 <br /> (Бежевые экраны тоже могут
				любить)
			</motion.p>

			<motion.button
				type="button"
				className="button"
				onClick={handleClick}
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 2.5 }}
			>
				С днём рождения! 🎉
			</motion.button>
		</article>
	);
};
