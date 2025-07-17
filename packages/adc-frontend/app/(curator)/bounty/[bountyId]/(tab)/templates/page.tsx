"use client";

import Icons from "@/components/icons";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import TemplateView from "./components/template-list";

interface IPageProps {
	params: {};
	searchParams: { view: string | undefined };
}

export default function Templates({
	searchParams,
}: { searchParams: { view: string | undefined } }) {
	const params = useParams<{ bountyId: string }>();
	return (
		<Shell variant={"tab"}>
			<div className="flex items-center justify-between ">
				<Button asChild>
					<Link href={`/bounty/${params.bountyId}/form/new`}>
						<Icons.add /> New Template
					</Link>
				</Button>

				<div className="flex items-center gap-2.5">
					<Button variant={"outline"} className="rounded py-[6px] font-normal">
						<Icons.Calendar /> Date Created <Icons.arrowDown />
					</Button>
					<div className="flex items-center">
						<Button
							variant={"outline"}
							className={cn("rounded rounded-r-[0px] border-r-0 py-[6px] font-normal", {
								"bg-input/50": searchParams.view?.includes("list"),
							})}
							asChild
						>
							<Link href={"?view=list"}>
								<Icons.List className="size-5" /> List
							</Link>
						</Button>
						<Button
							variant={"outline"}
							className={cn("rounded rounded-l-[0px] border-l-0 py-[6px] font-normal", {
								"bg-input/50": searchParams.view?.includes("grid"),
							})}
							asChild
						>
							<Link href={"?view=grid"}>
								<Icons.AlignJustify className="size-5" /> Grid{" "}
							</Link>
						</Button>
					</div>
				</div>
			</div>

			<Separator className="-mt-4" />
			<TemplateView bountyId={params.bountyId} />

			{/* <div className="flex flex-col items-center justify-center gap-10 font-medium text-base/[24px]">
				<p>You have not created any form</p>
				<Button>
					<Icons.add /> New Template
				</Button>
			</div> */}
			{/* <Tabs defaultValue="applications">
				<TabsList className="mb-3 rounded-none border-b-2 bg-[#F3F3F3]">
					<TabsTrigger
						value="applications"
						className="after:-mb-1.5 relative flex cursor-pointer items-center gap-2 self-stretch px-4 py-3 font-medium text-[14px]/[20px] tracking-[0.1px] transition-all duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-white hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-white data-[state=active]:after:bg-primary"
					>
						Applications
					</TabsTrigger>
					<TabsTrigger
						value="event"
						className="after:-mb-1.5 relative flex cursor-pointer items-center gap-2 self-stretch px-8 py-3 font-medium text-[14px]/[20px] tracking-[0.1px] transition-all duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-white hover:text-foreground data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:hover:bg-white data-[state=active]:after:bg-primary"
					>
						Events
					</TabsTrigger>
				</TabsList>
				<TabsContent value="applications"></TabsContent>
				<TabsContent value="event">f</TabsContent>
			</Tabs> */}
		</Shell>
	);
}
