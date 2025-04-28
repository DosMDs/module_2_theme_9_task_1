import styles from "./information-layout.module.css";
import { useSelector, useDispatch } from "react-redux";
import { gameRestart } from "../../gameSlice";
import { selectGameData } from "../../selectors";

export const InformationLayout = () => {
	const { currentPlayer, isDraw, isGameEnding } = useSelector(selectGameData);
	const dispatch = useDispatch();

	let textInfo = `Ходит: ${currentPlayer}`;
	if (isDraw) {
		textInfo = "Ничья";
	} else if (isGameEnding) {
		textInfo = `Победа: ${currentPlayer}`;
	}

	const handleRestart = () => {
		dispatch(gameRestart());
	};

	const showRestart = isDraw || isGameEnding;

	return (
		<>
			<h1 className={styles.header}>{textInfo}</h1>
			{showRestart && (
				<button
					className={styles["button-reset"]}
					onClick={handleRestart}
				>
					Начать заново
				</button>
			)}
		</>
	);
};
