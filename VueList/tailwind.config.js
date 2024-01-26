/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: '"Neue Montreal", Arial, sans-serif',
                body: '"Lexend", "Atkinson Hyperlegible", sans-serif',
            },
            aspectRatio: {
                poster: "3/2",
            },
            width: {
                iphone8: "375px",
            },
            height: {
                iphone8: "665px",
            },
            fontSize: {
                xs: "0.6rem",
                sm: "0.75rem",
                base: "0.875rem",
                md: "1.25rem",
                lg: "1.55rem",
                xl: "3rem",
            },
            backgroundImage: {
                custom1: "linear-gradient(179.18deg, #1B0B27 0.7 %, #007EA7 47.43 %, #1B0B27 99.3 %)",
                mask1: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 15%, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 0) 98%,  rgba(0, 0, 0, 0.2) 100%)",
                mask2: "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%,rgba(0, 0, 0, 0) 2%, rgba(0, 0, 0, 0) 75%,rgba(0, 0, 0, 0.1) 85%,  rgba(0, 0, 0, 0.2) 100%)",
                opgr1: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 10%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.2) 90%, rgba(255,255,255,0) 100%)",
                srRes: "linear-gradient(134deg, #001E6C 0%, #FFF 100%);",
                lghtGry: "#98817B",
            },
            borderRadius: {
                s5: "5px",
            },
            backgroundColor: {
                brGr: "#C2E000",
                offBlck: "#0E1116",
                mdPrpl: "#9747FF",
                drkRd: "#9D0026",
                mdBl: "#007399",
                brOrng: "#ff8811",
                lghtGry: "#98817B",
                dzrPnk: "#9333E8",
            },
            borderColor: {
                brGr: "#C2E000",
                offBlck: "#0E1116",
                mdPrpl: "#9747FF",
                drkRd: "#9D0026",
                mdBl: "#007399",
                brOrng: "#ff8811",
                lghtGry: "#98817B",
                dzrPnk: "#9333E8",
            },
            outlineColor: {
                brGr: "#C2E000",
                offBlck: "#0E1116",
                mdPrpl: "#9747FF",
                drkRd: "#9D0026",
                mdBl: "#007399",
                brOrng: "#ff8811",
            },
            fill: {
                brGr: "#C2E000",
                offBlck: "#0E1116",
                mdPrpl: "#9747FF",
                drkRd: "#9D0026",
                mdBl: "#007399",
                brOrng: "#ff8811",
                lghtGry: "#98817B",
                dzrPnk: "#9333E8",
            },
            textColor: {
                brGr: "#C2E000",
                offBlck: "#0E1116",
                mdPrpl: "#9747FF",
                drkRd: "#9D0026",
                mdBl: "#007399",
                brOrng: "#ff8811",
                lghtGry: "#98817B",
                dzrPnk: "#9333E8",
            },
            animation: {
                softPulse: "pulse3D 2s 1s 1 normal forwards",
                down: "slide 300ms ease-out 1 reverse forwards",
                up: "slide 300ms ease-out 1 normal forwards",
            },
            keyframes: {
                slide: {
                    "0%": {
                        transform: "translateY(0px)",
                    },
                    "100%": { transform: "translateY(-2px)" },
                },
                pulse3D: {
                    "0%": {
                        position: "relative",
                        transform: "perspective(100px) translateZ(0px) rotateX(0deg)",
                    },
                    "100%": {
                        position: "relative",
                        transform: "perspective(100px) translateZ(0px) rotateX(-1deg)",
                    },
                },
            },
        },
    },
    plugins: [require("tailwind-scrollbar")],
}
