import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import SearchBounty from "./components/bounty-search";
import CuratorBountyList from "./components/curator-bounty-list";

export default function Home() {
	return (
		<Shell className="flex flex-col items-center justify-center">
			<div className="flex max-w-[648px] flex-col items-center justify-center gap-[38px] text-center">
				<h1 className="font-black text-[40px]/[100%]">
					Polkadot Bounty Application Review System
				</h1>
				<SearchBounty />
			</div>
			<CuratorBountyList shouldShowNav />
		</Shell>
	);
}
