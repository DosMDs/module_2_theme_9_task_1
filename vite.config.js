import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
			"@selectors": resolve(__dirname, "./src/selectors"),
			"@utils": resolve(__dirname, "./src/utils.js"),
			"@gameSlice": resolve(__dirname, "./src/gameSlice.js"),
		},
	},
});
