import { useDispatch, useSelector } from "react-redux";
import styles from "./field-layout.module.css";
import { selectGameData } from "@selectors";
import { isWin } from "@utils";
import { setMove, setIsDraw, setIsGameEnding } from "@gameSlice";

export const FieldLayout = () => {
	const { field, currentPlayer, isGameEnding, isDraw } =
		useSelector(selectGameData);
	const dispatch = useDispatch();

	const update = (index) => {
		if (field[index] !== "" || isGameEnding || isDraw) {
			return;
		}

		const move = { field: [...field], currentPlayer };

		move.field[index] = currentPlayer;

		if (isWin(move.field)) {
			dispatch(setIsGameEnding());
		} else if (move.field.find((el) => el === "") === undefined) {
			dispatch(setIsDraw);
		} else {
			move.currentPlayer = currentPlayer === "X" ? "0" : "X";
		}
		dispatch(setMove(move));
	};

	return (
		<div className={styles.container}>
			{field.map((value, index) => {
				return (
					<button
						className={styles.field}
						key={index}
						onClick={() => update(index)}
					>
						{value}
					</button>
				);
			})}
		</div>
	);
};
