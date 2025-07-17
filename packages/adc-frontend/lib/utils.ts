import { dotenv } from "@/constants/dotenv";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
export const rootDomain = dotenv.APP_URL || "localhost:3000";

export function formatAddress(address: string, charLength = 4) {
	if (!address) return "";
	const prefix = address.substring(0, charLength); // Take first 6 characters
	const suffix = address.substring(address.length - charLength); // Take last 4 characters
	return `${prefix}...${suffix}`; // Combine with ellipsis in the middle
}

/**
 * Formats an ISO date string into a human-readable date.
 * @param isoDate - The ISO date string to format.
 * @returns The formatted date string.
 */
export const formatDate = (isoDate: string): string =>
	new Date(isoDate).toLocaleDateString("en-US", {
		day: "2-digit",
		month: "short",
		year: "numeric",
	});
