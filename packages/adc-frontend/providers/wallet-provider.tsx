"use client";

import { dotenv } from "@/constants/dotenv";
import { walletList } from "@/constants/wallet-list";
import {
	WalletContext,
	type WalletKitError,
	WalletKitErrorCodes,
} from "@/context/wallet-context";
import { initPolkadotJs } from "@/lib/polkadot";
import type { ApiPromise, HttpProvider, WsProvider } from "@polkadot/api";
import type { ApiOptions } from "@polkadot/api/types";
import type { Unsubcall } from "@polkadot/extension-inject/types";
import type { Signer } from "@polkadot/types/types";
import { type Wallet, type WalletAccount, isWalletInstalled } from "@talismn/connect-wallets";
import { type PropsWithChildren, useCallback, useEffect, useState } from "react";

import ConnectWallet from "@/components/wallet/inedx";
import { web3FromSource } from "@/lib/web3-from-source";
import AppProvider from "./app-provider";

export const LS_ACTIVE_ACCOUNT_ADDRESS = "activeAccountAddress";
export const LS_ACTIVE_WALLET_NAME = "activeWalletName";

export interface WalletProviderProps extends PropsWithChildren {
	appName: string;
	supportedWallets?: Wallet[];
	apiOptions?: ApiOptions;
}

export default function WalletProvider({
	appName,
	apiOptions,
	supportedWallets = walletList,
	children,
}: WalletProviderProps) {
	const [isInitializing, setIsInitializing] = useState(true);
	const [isInitialized, setIsInitialized] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isConnected, setIsConnected] = useState(false);
	const [error, setError] = useState<WalletKitError | undefined>();
	const [api, setApi] = useState<ApiPromise>();
	const [_provider, setProvider] = useState<WsProvider | HttpProvider>();
	const [selectedWallet, setSelectedWallet] = useState<Wallet>();
	const [accounts, setAccounts] = useState<WalletAccount[]>([]);
	const [activeAccount, setActiveAccount] = useState<WalletAccount>();
	const [signer, setSigner] = useState<Signer>();
	const [unsubscribeAccounts, setUnsubscribeAccounts] = useState<Unsubcall>();

	const [open, setIsOpen] = useState(false);

	// // Initialize polkadot-js/api
	// const initialize = async (): Promise<ApiPromise | undefined> => {
	// 	setIsInitializing(true);
	// 	setIsConnected(false);
	// 	setError(undefined);

	// 	try {
	// 		if (api) {
	// 			await api.disconnect();
	// 		}
	// 		// Create new API instance
	// 		const _api = await initPolkadot(dotenv.XCAVATE_WS_URL);
	// 		setApi(_api);
	// 		setIsInitialized(true);
	// 		setIsInitializing(false);
	// 		return _api;
	// 	} catch (e) {
	// 		const message = "Error while initializing Polkadot.js API";
	// 		console.error(message, e);
	// 		setError(e as Error);
	// 		setIsConnected(false);
	// 		setApi(undefined);
	// 		setProvider(undefined);
	// 		setIsInitialized(false);
	// 	}
	// 	setIsInitializing(false);
	// 	return undefined;
	// };

	// Initialize polkadot-js/api
	const initialize = async () => {
		setIsInitialized(!!api?.isConnected);
		setIsInitializing(true);
		setIsConnected(false);
		setError(undefined);

		try {
			const { api, provider } = await initPolkadotJs(dotenv.XCAVATE_WS_URL, {
				noInitWarn: true,
				throwOnConnect: true,
				...apiOptions,
			});
			setProvider(provider);
			setApi(api);
			setIsInitialized(true);
		} catch (e) {
			const message = "Error while initializing polkadot.js api";
			console.error(message, e);
			setError({ code: WalletKitErrorCodes.InitializationError, message });
			setIsConnected(false);
			setIsLoading(false);
			setIsInitialized(false);
			setApi(undefined);
			setProvider(undefined);
		} finally {
			setIsInitializing(false);
		}
	};

	// const initializeWalletFromLocalStorage = async () => {
	// 	setIsLoading(true);

	// 	if (!api?.isConnected || isInitialized) {
	// 		await initialize();
	// 		try {
	// 			// Determine installed wallets
	// 			const wallets = supportedWallets.filter((w) => isWalletInstalled(w.extensionName));
	// 			if (!wallets?.length) {
	// 				const message = "No Substrate-compatible extension detected";
	// 				setError({
	// 					code: WalletKitErrorCodes.NoSubstrateExtensionDetected,
	// 					message,
	// 				});
	// 				throw new Error(message);
	// 			}

	// 			const wallet = web3FromSource();
	// 			setSelectedWallet(wallet);
	// 			setSigner(wallet?.signer);

	// 			const lastActiveAccount = localStorage.getItem(LS_ACTIVE_ACCOUNT_ADDRESS);

	// 			if (lastActiveAccount) {
	// 				const chainSS58 = api?.registry.chainSS58;
	// 				const accounts = await wallet?.getAccounts(
	// 					typeof chainSS58 === "number" ? undefined : chainSS58,
	// 				);
	// 				setAccounts(accounts || []);
	// 				const foundAccount = accounts?.find(
	// 					(acc: WalletAccount) => acc.address === lastActiveAccount,
	// 				);
	// 				if (foundAccount) {
	// 					setActiveAccount(foundAccount);
	// 				} else if (accounts && accounts.length > 0) {
	// 					setActiveAccount(accounts[0]);
	// 				} else {
	// 					setActiveAccount(undefined);
	// 				}
	// 			}
	// 		} catch (e) {
	// 			console.error("Failed to initialize wallet from local storage", e);
	// 			setError({
	// 				code: WalletKitErrorCodes.InitializationError,
	// 				message: "",
	// 			});
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	}
	// };

	// Connect to injected wallet
	// biome-ignore lint/correctness/useExhaustiveDependencies: explanation<>

	// const connect = useCallback(
	// 	async (wallet: Wallet): Promise<void> => {
	// 		console.log(`Connecting to wallet: ${wallet.extensionName}`);
	// 		setIsLoading(true);
	// 		setIsConnected(false);
	// 		setError(undefined);

	// 		console.log(api);

	// 		// Make sure api is initialized & connected to provider
	// 		if (!api?.isConnected || !api.registry.chainSS58) {
	// 			const _api = await initialize();
	// 			if (!_api?.isConnected) {
	// 				setIsLoading(false);
	// 				return;
	// 			}
	// 		}

	// 		console.log("initialize", wallet.extensionName);

	// 		try {
	// 			setSelectedWallet(wallet);
	// 			// Enable wallet
	// 			await wallet.enable(appName);
	// 			localStorage.setItem(LS_ACTIVE_WALLET_NAME, wallet.extensionName);
	// 			setSigner(wallet.signer);
	// 			// Subscribe to accounts
	// 			const unsub = await wallet.subscribeAccounts((accounts: WalletAccount[] = []) => {
	// 				setAccounts(accounts || []);
	// 				if (accounts && accounts.length > 0) {
	// 					setActiveAccount(accounts[0]);
	// 					localStorage.setItem(LS_ACTIVE_ACCOUNT_ADDRESS, accounts[0].address);
	// 				} else {
	// 					setActiveAccount(undefined);
	// 				}
	// 			});
	// 			setUnsubscribe((prev = {}) => ({
	// 				...prev,
	// 				[wallet.extensionName]: unsub as () => unknown,
	// 			}));
	// 			setIsConnected(true);
	// 			setError(undefined);
	// 		} catch (error) {
	// 			setError(error as Error);
	// 			setIsConnected(false);
	// 			setSelectedWallet(undefined);
	// 			setAccounts([]);
	// 			setActiveAccount(undefined);
	// 		} finally {
	// 			setIsLoading(false);
	// 		}
	// 	},
	// 	[api, appName],
	// );

	// Connect to injected wallet

	const initializeWalletFromLocalStorage = useCallback(async () => {
		setIsLoading(true);

		try {
			// Only proceed if API is ready
			if (!api?.isConnected) return;

			const lastWalletName = localStorage.getItem(LS_ACTIVE_WALLET_NAME);
			const lastActiveAccount = localStorage.getItem(LS_ACTIVE_ACCOUNT_ADDRESS);

			if (!lastWalletName) return;

			const wallet = supportedWallets.find((w) => w.extensionName === lastWalletName);
			if (!wallet) return;

			setSelectedWallet(wallet);

			// Enable wallet
			await wallet.enable(appName);
			setSigner(wallet.signer);

			// Subscribe to accounts
			unsubscribeAccounts?.();
			const unsubscribe = await wallet.subscribeAccounts((accounts: WalletAccount[] = []) => {
				setAccounts(accounts || []);
				let foundAccount = accounts.find((acc) => acc.address === lastActiveAccount);
				if (!foundAccount && accounts.length > 0) foundAccount = accounts[0];
				setActiveAccount(foundAccount);
				setIsConnected(!!foundAccount);
			});
			setUnsubscribeAccounts(unsubscribe as any);
		} catch (e) {
			console.error("Failed to initialize wallet from local storage", e);
			setError({ code: WalletKitErrorCodes.InitializationError, message: "" });
		} finally {
			setIsLoading(false);
		}
	}, [api, appName, supportedWallets, unsubscribeAccounts]);

	const connect = async (wallet: Wallet) => {
		setError(undefined);
		setIsLoading(true);
		setIsConnected(!!activeAccount);

		// Make sure api is initialized & connected to provider

		if (!api?.isConnected || isInitialized) {
			await initialize();
			try {
				// Determine installed wallets
				const wallets = supportedWallets.filter((w) => isWalletInstalled(w.extensionName));
				if (!wallets?.length) {
					const message = "No Substrate-compatible extension detected";
					setError({
						code: WalletKitErrorCodes.NoSubstrateExtensionDetected,
						message,
					});
					throw new Error(message);
				}

				// Determine wallet to use
				const preferredWallet =
					wallet && wallets.find((w) => w.extensionName === wallet.extensionName);
				const _wallet = preferredWallet;

				setSelectedWallet(_wallet);

				// Enable wallet
				await _wallet?.enable(appName);
				localStorage.setItem(LS_ACTIVE_WALLET_NAME, wallet.extensionName);

				const signer = _wallet?.signer as Signer;

				setSigner(signer);

				// Query & keep listening to injected accounts
				unsubscribeAccounts?.();
				const unsubscribe = _wallet?.subscribeAccounts((accounts) => {
					setAccounts(accounts || []);
					if (accounts && accounts.length > 0) {
						setActiveAccount(accounts[0]);
						setIsConnected(true);
						localStorage.setItem(LS_ACTIVE_ACCOUNT_ADDRESS, accounts[0].address);
					} else {
						setActiveAccount(undefined);
					}
				});

				setUnsubscribeAccounts(unsubscribe as any);
			} catch (e: any) {
				console.error("Error while connecting wallet:", e);
				setSelectedWallet(undefined);
				setSigner(undefined);
				setIsConnected(false);
			} finally {
				setIsLoading(false);
			}
		}
	};

	// Disconnect wallet
	// const disconnect = useCallback(() => {
	// 	setSelectedWallet(undefined);
	// 	setAccounts([]);
	// 	setActiveAccount(undefined);
	// 	setIsConnected(false);
	// 	setIsInitialized(false);
	// 	setIsInitializing(false);
	// 	setIsLoading(false);
	// 	setError(undefined);
	// 	setUnsubscribe(undefined);
	// 	api?.disconnect();
	// 	provider?.disconnect();
	// 	setApi(undefined);
	// 	setProvider(undefined);
	// 	localStorage.removeItem(LS_ACTIVE_ACCOUNT_ADDRESS);
	// 	localStorage.removeItem(LS_ACTIVE_WALLET_NAME);
	// }, [api, provider]);

	// Keep active signer up to date
	useEffect(() => {
		api?.setSigner(signer as Signer);
	}, [api, signer]);
	// Disconnect
	const disconnect = async (disconnectApi?: boolean) => {
		if (disconnectApi) {
			await api?.disconnect();
			return;
		}
		setIsConnected(false);
		setAccounts([]);
		unsubscribeAccounts?.();
		setUnsubscribeAccounts(undefined);
		setSelectedWallet(undefined);
	};

	// API Disconnection listener
	useEffect(() => {
		const handler = () => {
			disconnect();
			setIsInitialized(false);
		};
		api?.on("disconnected", handler);
		return () => {
			api?.off("disconnected", handler);
		};
	}, [api]);

	// Initialze
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		initialize();
		return () => {
			unsubscribeAccounts?.();
		};
	}, []);

	useEffect(() => {
		if (api?.isConnected) {
			initializeWalletFromLocalStorage();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [api?.isConnected]);

	const contextValue = {
		isInitializing,
		isInitialized,
		isLoading,
		isConnected,
		error,
		api,
		signer,
		connect,
		disconnect,
		accounts,
		activeAccount,
		setActiveAccount,
		selectedWallet,
		setSelectedWallet,
		openWalletModal: open,
		setOpenWalletModal: setIsOpen,
		supportedWallets,
	};

	return (
		<WalletContext.Provider value={contextValue}>
			<AppProvider>
				{children}

				<ConnectWallet />
			</AppProvider>
		</WalletContext.Provider>
	);
}
