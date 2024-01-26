import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import { resolve } from "path"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    server: {
        proxy: {
            "deezerAPI/": {
                target: "https://api.deezer.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\deezerAPI/, ""),
            },
            "discogsAPI/": {
                target: "https://api.discogs.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\discogsAPI/, ""),
            },
        },
    },
    build: {
        rollupOptions: {
            input: {
                // eslint-disable-next-line no-undef
                main: resolve(__dirname, "index.html"),
                // eslint-disable-next-line no-undef
                calculator: resolve(__dirname, "Calculator/calculator.html"),
                // eslint-disable-next-line no-undef
                mtt: resolve(__dirname, "MyTopTracks/MTT.html"),
                // eslint-disable-next-line no-undef
                list: resolve(__dirname, "List/VueList/index.html"),
            },
        },
    },
    base: "./<repo>/",
    assetsInclude: ["**/*.png"],
})
