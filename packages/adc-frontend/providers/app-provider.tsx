"use client";

import { type Bounty, bounties } from "@/constants/curators";
import { events as mock, type IEvent } from "@/constants/eevents";
import { AppContext, type AppContextType } from "@/context/app-context";
import React, { useCallback, useEffect, useState, type ReactNode } from "react";

interface AppProviderProps {
	children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
	const [isConnected, setIsConnected] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [bounty, setBounty] = useState<Bounty | null>(null);
	const [events, setEvents] = useState<IEvent[]>(mock);

	// Select a bounty by name, simulate loading
	const selectBounty = useCallback((bountyName: string) => {
		setIsLoading(true);
		const timeout = setTimeout(() => {
			const found = bounties.find((b) => b.name === bountyName) || null;
			if (found?.name !== undefined) {
				localStorage.setItem("bounty", found.name);
			} else {
				localStorage.removeItem("bounty");
			}
			setBounty(found);
			setIsLoading(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, []);

	useEffect(() => {
		const item = localStorage.getItem("bounty");
		if (item) {
			const found = bounties.find((b) => b.name === item) || null;
			setBounty(found);
		}
	}, []);

	const value: AppContextType = {
		isConnected,
		isLoading,
		bounties: bounties,
		bounty,
		selectBounty,
		setIsConnected,
		events,
		setEvents,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
