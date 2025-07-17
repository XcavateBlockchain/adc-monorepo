"use client";

import Icons from "@/components/icons";
import Messages from "@/components/message";
import Proposals from "@/components/proposals";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { events } from "@/constants/eevents";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";

export default function EventPage({ params }: { params: Promise<{ eventId: string }> }) {
	const router = useRouter();
	const { eventId } = use(params);
	const event = events.find((data) => data.id === Number(eventId));
	return (
		<Shell className="lg:mt-10">
			<Button variant={"link"} onClick={() => router.back()}>
				<ArrowLeft /> Back
			</Button>
			<Tabs
				defaultValue="tab-1"
				orientation="vertical"
				className="grid flex-1 items-stretch gap-10 md:grid-cols-[200px_1fr]"
			>
				<div className="sticky top-0 order-1 flex flex-col gap-6 ">
					<TabsList className="flex h-auto w-full flex-col items-start gap-2 rounded-[8px] bg-[#DFDFDF]/[0.8] px-2 py-2.5">
						<TabsTrigger
							value="tab-1"
							className="w-full cursor-pointer rounded-[10px] px-4 py-[6px] font-medium data-[state=active]:bg-black data-[state=active]:text-white"
						>
							Proposal
						</TabsTrigger>
						<TabsTrigger
							value="tab-2"
							className="w-full cursor-pointer rounded-[10px] px-4 py-[6px] font-medium data-[state=active]:bg-black data-[state=active]:text-white"
						>
							Documents
						</TabsTrigger>
						<TabsTrigger
							value="tab-3"
							className="w-full cursor-pointer rounded-[10px] px-4 py-[6px] font-medium data-[state=active]:bg-black data-[state=active]:text-white"
						>
							Messages
						</TabsTrigger>
					</TabsList>
				</div>
				<div className="relative order-2 flex flex-1 flex-col">
					<TabsContent value="tab-1">{event && <Proposals {...event} />}</TabsContent>
					<TabsContent value="tab-2">
						<div className="grid grid-cols-3 gap-[25px]">
							{["contract", "Document", "Sales"].map((item) => (
								<div key={item} className="flex w-full items-start bg-[#F3F3F3] px-3.5 py-2.5">
									<Icons.TemplateIcon className="size-5" />
									<div className="w-full space-y-1 text-[14px]/[20px]">
										<span className="capitalize">{item}</span>
										<p>uploaded by John</p>
									</div>
									<ChevronRight size={20} />
								</div>
							))}
						</div>
					</TabsContent>
					<TabsContent value="tab-3">
						<Messages />
					</TabsContent>
				</div>
			</Tabs>
		</Shell>
	);
}
