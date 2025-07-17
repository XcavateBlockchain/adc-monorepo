import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ApplicationList from "./application-list";

export default function Applications() {
	return (
		<Shell variant={"tab"}>
			<div className="flex items-center justify-end ">
				<div className="">
					<Button variant={"outline"} className="rounded font-normal">
						<Icons.Calendar /> Date Created <Icons.arrowDown />
					</Button>
				</div>
			</div>
			<Separator className="-mt-4" />

			<ApplicationList />
		</Shell>
	);
}
