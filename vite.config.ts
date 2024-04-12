import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig(() => {
	return {
		base: "/Munchkin_Counter/",
		build: {
			outDir: "build",
		},
		resolve: {
			alias: {
				"@": resolve(__dirname, "src"),
			},
		},
		plugins: [react()],
	};
});
