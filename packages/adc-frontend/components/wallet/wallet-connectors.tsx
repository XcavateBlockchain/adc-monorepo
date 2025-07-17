import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useApp } from "@/context/app-context";
import { useWallet } from "@/context/wallet-context";
import { type Wallet, isWalletInstalled } from "@talismn/connect-wallets";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import WalletLoading from "./wallet-loading";

export default function WalletConnectors() {
	const { isLoading, selectedWallet, supportedWallets } = useWallet();

	if (isLoading) {
		return (
			<>
				<div className="absolute top-4 left-4 z-10 inline-flex items-center gap-2 font-medium text-[12px]/[24px]">
					<ArrowLeftIcon className="size-6" /> Back to wallet
				</div>
				<DialogHeader className="mt-12 mb-3">
					<DialogTitle className="font-medium text-[16px]/[24px] sm:text-center">
						Select an account
					</DialogTitle>
					<DialogDescription className="sr-only sm:text-center">
						Select a wallet to connect
					</DialogDescription>
				</DialogHeader>

				<div className="space-y-[6px] ">
					{isLoading && selectedWallet && <WalletLoading {...selectedWallet} />}

					<div className="flex min-h-[127px] w-full items-center justify-center bg-[#F0F0F0]">
						<div className="flex flex-col items-center justify-center gap-1 text-center">
							<h3 className="font-medium text-[12px]/[18px]">No Accounts Connected</h3>
							<p className="font-light text-[9px]">Connect your wallet to mange accounts</p>
						</div>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<DialogHeader className="mt-6 mb-3.5 gap-0.5">
				<DialogTitle className="sm:text-center">Connect wallet</DialogTitle>
				<DialogDescription className="sm:text-center">
					Select a wallet to connect
				</DialogDescription>
			</DialogHeader>
			<div className="overflow-y-auto">
				<div className="flex flex-col gap-2">
					{supportedWallets.map((wallet) => (
						<WalletConnector key={wallet.extensionName} {...wallet} />
					))}
				</div>
			</div>
		</>
	);
}

function WalletConnector({ ...wallet }: Wallet) {
	const { connect, setOpenWalletModal } = useWallet();
	const { setIsConnected } = useApp();
	const installed = isWalletInstalled(wallet.extensionName);
	return (
		<div className="flex w-full items-center justify-between self-stretch px-2.5 py-2">
			<div className="flex items-center gap-2 font-medium text-[14px]/[18px]">
				<img
					src={wallet.logo.src}
					alt={wallet.logo.alt}
					className="size-6 rounded-full bg-[#D9D9D9]"
				/>
				<span>{wallet.title}</span>
			</div>
			{installed ? (
				<Button
					size={"sm"}
					onClick={() => connect(wallet)}
					// onClick={() => {
					// 	setIsConnected(true);
					// 	setOpenWalletModal(false);
					// }}
				>
					Connect
				</Button>
			) : (
				<Button variant={"link"} size={"sm"} className="text-[#A0A0A0]">
					<Link href={wallet.installUrl} target="_blank" rel="noopener noreferrer">
						Install
					</Link>
				</Button>
			)}
		</div>
	);
}
