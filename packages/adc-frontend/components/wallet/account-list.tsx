import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWallet } from "@/context/wallet-context";
import { cn } from "@/lib/utils";
import Identicon from "@polkadot/react-identicon";
import type { WalletAccount } from "@talismn/connect-wallets";
import { ArrowLeftIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import { ScrollArea } from "../ui/scroll-area";
import WalletLoading from "./wallet-loading";

export default function AccountList() {
	const { accounts } = useWallet();
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
				{accounts && accounts.length >= 1 ? (
					<div className="h-[200px] w-full overflow-y-auto">
						<div className="flex h-full w-full flex-col gap-2">
							{accounts?.map((account, index: number) => (
								<AccountOption key={index} account={account} />
							))}
						</div>
					</div>
				) : (
					<div className="flex min-h-[127px] w-full items-center justify-center bg-[#F0F0F0]">
						<div className="flex flex-col items-center justify-center gap-1 text-center">
							<h3 className="font-medium text-[12px]/[18px]">No Accounts Connected</h3>
							<p className="font-light text-[9px]">Connect your wallet to mange accounts</p>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

interface AccountOptionProps {
	account: WalletAccount;
}

function AccountOption({ account }: AccountOptionProps) {
	const { activeAccount, setActiveAccount, setOpenWalletModal } = useWallet();

	function updateActiveAccount() {
		if (setActiveAccount) {
			setActiveAccount(account);
			const LS_ACTIVE_ACCOUNT_ADDRESS = "activeAccountAddress";
			localStorage.setItem(LS_ACTIVE_ACCOUNT_ADDRESS, account.address);
			setOpenWalletModal(false);
		}
	}

	return (
		<button
			className={cn(
				"flex w-full cursor-pointer items-center gap-2 self-stretch rounded border border-[#F0F0F0] px-3.5 py-[11px] transition-all duration-200 hover:border-[#64B73D]",
				{
					"border-[#64B73D] bg-[#64B73D]/[0.10]": activeAccount?.address === account.address,
				},
			)}
			onClick={updateActiveAccount}
		>
			{/*address avatar icon */}
			<div>
				<Identicon
					size={25}
					value={account.address}
					theme="polkadot"
					className="size-6 rounded-full bg-[#D9D9D9]"
				/>
			</div>
			<div className="flex flex-col items-start gap-2">
				<div className="flex w-full items-center justify-between text-[12px]/[18px]">
					<h2 className="font-medium ">{account.name}</h2>
					<span>Connected</span>
				</div>
				<span className="font-light text-[9px]">{account.address}</span>
			</div>
		</button>
	);
}
