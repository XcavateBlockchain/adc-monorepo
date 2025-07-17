import { Shell } from "@/components/shell";
import EventBountyList from "./bounty-event-list";
import BountyLayout from "./components/bounty-layout";

export default function Page() {
	return (
		<BountyLayout>
			<Shell className="flex flex-col items-center justify-center lg:mt-[50px] lg:pt-10 xl:px-[160px]">
				<div className="mb-[100px] flex max-w-[648px] flex-col items-center justify-center gap-[38px] text-center">
					<h1 className="font-black text-[40px]/[100%]">
						Polkadot Bounty Application Review System
					</h1>
				</div>
				<EventBountyList />
			</Shell>
		</BountyLayout>
	);
}
