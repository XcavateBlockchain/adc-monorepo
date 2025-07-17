import type { Wallet } from "@talismn/connect-wallets";

export default function WalletLoading({ ...wallet }: Wallet) {
	return (
		<div className="flex w-full items-center gap-2 self-stretch rounded bg-[#F0F0F0] px-3.5 py-3">
			<img
				src={wallet.logo.src}
				alt={wallet.logo.alt}
				className="size-6 rounded-full bg-[#D9D9D9]"
			/>
			<div className="flex flex-col items-start gap-2">
				<div className="flex w-full items-center justify-between text-[12px]/[18px]">
					<h2 className="font-medium ">Awaiting wallet authorization</h2>
					<span>Cancel</span>
				</div>
				<span className="font-light text-[9px]">
					Please confirm the authorization request in your wallet extension
				</span>
			</div>
		</div>
	);
}
