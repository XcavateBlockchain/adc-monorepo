"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import Icons from "../icons";

export default function TabNav() {
	const params = useParams<{ bountyId: string }>();
	const pathname = usePathname();

	const items = [
		{
			title: "Curators",
			icon: Icons.UserOutlineIcon,
			path: `/bounty/${params.bountyId}`,
		},
		{
			title: "Templates",
			icon: Icons.TemplateIcon,
			path: `/bounty/${params.bountyId}/templates`,
		},
		{
			title: "Applicants",
			icon: Icons.message,
			path: `/bounty/${params.bountyId}/applications`,
		},
		{
			title: "Events",
			icon: Calendar,
			path: `/bounty/${params.bountyId}/events`,
		},
		{
			title: "Notifications",
			icon: Icons.Info,
			path: `/bounty/${params.bountyId}/notifications`,
		},
	];

	return (
		<div className="mt-[100px] flex w-full items-center justify-center">
			<div className="mb-3 flex w-full max-w-[920px] items-center rounded-none border-b-2 bg-[#F3F3F3] text-foreground">
				{items.map((item) => {
					return (
						<Link
							href={item.path}
							key={item.title}
							className={cn(
								"after:-mb-[2px] relative flex w-full cursor-pointer items-center gap-2 self-stretch px-8 py-3 font-medium text-[14px]/[20px] tracking-[0.1px] transition-all duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 hover:bg-white hover:text-foreground ",
								{
									"bg-transparent after:bg-primary hover:bg-white": pathname === item.path,
								},
							)}
						>
							<item.icon className="size-6 opacity-60" size={24} aria-hidden="true" />
							{item.title}
						</Link>
					);
				})}
			</div>
		</div>
	);
}
