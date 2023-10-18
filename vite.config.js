import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import sassPlugin from "vite-plugin-sass";

export default defineConfig({
  plugins: [react(), sassPlugin()],
});
