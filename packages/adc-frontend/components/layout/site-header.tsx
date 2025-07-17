import Link from "next/link";
import { ConnectWalletButton } from "../wallet/inedx";

export default function SiteHeader() {
	return (
		<header className=" w-full bg-background">
			<div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-5 lg:px-10 xl:px-15">
				<Link href={"/"}>
					<img src="/images/logo.svg" alt="logo" className="h-[30px] w-[143px]" />
				</Link>
				<ConnectWalletButton />
			</div>
		</header>
	);
}
