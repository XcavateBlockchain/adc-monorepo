import { walletList } from "@/constants/wallet-list";
import { type ApiPromise, HttpProvider, WsProvider } from "@polkadot/api";
import type { Signer } from "@polkadot/types/types";
import type { Wallet, WalletAccount } from "@talismn/connect-wallets";
import { type Dispatch, type SetStateAction, createContext, useContext } from "react";

export type WalletContextType = {
	isInitializing?: boolean;
	isInitialized?: boolean;
	isLoading?: boolean;
	isConnected?: boolean;
	error?: WalletKitError;
	api?: ApiPromise;
	signer?: Signer;
	connect: (wallet: Wallet) => Promise<void>;
	disconnect?: () => void;
	accounts?: WalletAccount[];
	activeAccount?: WalletAccount;
	setActiveAccount?: Dispatch<SetStateAction<WalletAccount | undefined>>;
	selectedWallet?: Wallet;
	setSelectedWallet?: Dispatch<SetStateAction<Wallet | undefined>>;
	openWalletModal: boolean;
	setOpenWalletModal: Dispatch<SetStateAction<boolean>>;
	supportedWallets: Wallet[];
};

export const WalletContext = createContext<WalletContextType | null>(null);

/**
 * Primary useWallet hook for `WalletProvider` context.
 */
export const useWallet = () => {
	const context = useContext(WalletContext);
	if (!context) throw new Error("useWallet must be used within a WalletProvider");
	return context;
};

/**
 * Helper Types
 */

// biome-ignore lint/style/useEnumInitializers: <explanation>
export enum WalletKitErrorCodes {
	InitializationError,
	NoSubstrateExtensionDetected,
	NoAccountInjected,
}

export interface WalletKitError {
	code: WalletKitErrorCodes;
	message: string;
}
