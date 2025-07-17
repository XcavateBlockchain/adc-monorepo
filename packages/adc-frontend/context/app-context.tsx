import type { Bounty } from "@/constants/curators";
import type { IEvent } from "@/constants/eevents";

import { type Dispatch, type SetStateAction, createContext, useContext } from "react";

export type AppContextType = {
	isConnected: boolean;
	isLoading: boolean;
	bounties: Bounty[];
	bounty: Bounty | null;
	setIsConnected: Dispatch<SetStateAction<boolean>>;
	selectBounty: (bounty: string) => void;
	events: IEvent[];
	setEvents: (event: any) => void;
};

export const AppContext = createContext<AppContextType | null>(null);

/**
 * Primary useWallet hook for `WalletProvider` context.
 */
export const useApp = () => {
	const context = useContext(AppContext);
	if (!context) throw new Error("useWallet must be used within a WalletProvider");
	return context;
};
