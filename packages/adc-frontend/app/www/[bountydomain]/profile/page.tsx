"use client";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";
import BountyLayout from "../components/bounty-layout";
import BountyApplicationList from "./components/bounty-application-list";
import Template from "./components/template";
import UserEventList from "./components/user-event-list";

export default function ProfilePage({
	params,
}: { params: Promise<{ bountydomain: string }> }) {
	const router = useRouter();
	const { bountydomain } = use(params);
	return (
		<BountyLayout>
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
								Template
							</TabsTrigger>
							{/* <TabsTrigger
								value="tab-2"
								className="w-full cursor-pointer rounded-[10px] px-4 py-[6px] font-medium data-[state=active]:bg-black data-[state=active]:text-white"
							>
								Application
							</TabsTrigger> */}
							<TabsTrigger
								value="tab-3"
								className="w-full cursor-pointer rounded-[10px] px-4 py-[6px] font-medium data-[state=active]:bg-black data-[state=active]:text-white"
							>
								Events
							</TabsTrigger>
						</TabsList>
					</div>
					<div className="relative order-2 flex flex-1 flex-col">
						<TabsContent value="tab-1">
							<Template id={bountydomain} />
						</TabsContent>
						{/* <TabsContent value="tab-2">
							<BountyApplicationList />
						</TabsContent> */}
						<TabsContent value="tab-3">
							<UserEventList />
						</TabsContent>
					</div>
				</Tabs>
			</Shell>
		</BountyLayout>
	);
}
