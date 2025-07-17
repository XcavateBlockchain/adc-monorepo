import { Roboto, Roboto_Mono } from "next/font/google";

export const fontRoboto = Roboto({
	subsets: ["latin"],
	fallback: ["sans-serif"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-roboto-sans",
});

export const fontRobotoMono = Roboto_Mono({
	subsets: ["latin"],
	variable: "--font-roboto-mono",
});
