import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Game from "./game.jsx";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={store}>
			<Game />
		</Provider>
	</StrictMode>
);
