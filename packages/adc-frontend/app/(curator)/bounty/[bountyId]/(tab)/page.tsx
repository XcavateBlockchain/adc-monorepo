import CuratorBountyList from "@/app/(main)/components/curator-bounty-list";
import { Shell } from "@/components/shell";

export default function Curator() {
	return (
		<Shell variant={"tab"} className="">
			<CuratorBountyList maxHeight="[&>div]:max-h-[57vh]" />
		</Shell>
	);
}
