import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	field: new Array(9).fill(""),
	currentPlayer: "X",
	isDraw: false,
	isGameEnding: false,
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		gameRestart: () => initialState,
		setMove: (state, action) => ({
			...state,
			...action.payload,
		}),
		setIsDraw: (state) => {
			state.isDraw = true;
		},
		setIsGameEnding: (state) => {
			state.isGameEnding = true;
		},
	},
});

// Action creators are generated for each case reducer function
export const { gameRestart, setMove, setIsDraw, setIsGameEnding } =
	gameSlice.actions;

export default gameSlice.reducer;
