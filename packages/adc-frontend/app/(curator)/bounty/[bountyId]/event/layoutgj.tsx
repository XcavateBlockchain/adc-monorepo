"use client";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

const _items = [
	{
		name: "Proposal",
		path: "",
	},
	{
		name: "Document",
		path: "/documents",
	},
	{
		name: "Messages",
		path: "/messages",
	},
];

export default function EventLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="container relative mx-auto mt-10 w-full px-[100px]">
			{children}
			{/* <div className="grid flex-1 items-stretch gap-10 md:grid-cols-[200px_1fr]">
				<div className="sticky top-0 order-1 flex flex-col gap-6 ">
					<div className="flex w-full flex-col items-start gap-2 rounded-[8px] bg-[#DFDFDF]/[0.8] px-2 py-2.5">
						{items.map((item) => (
							<EventLink key={item.name} name={item.name} path={item.path} />
						))}
					</div>
				</div>
				<div className="relative order-2 flex flex-1 flex-col">
					<div className="min-h-[85vh] space-y-8 border-l px-[70px]">{children}</div>
				</div>
			</div> */}
		</div>
	);
}

function EventLink({ name, path }: { name: string; path: string }) {
	const params = useParams<{ bountyId: string; eventId: string }>();
	const pathname = usePathname();
	const isPath = pathname === `/bounty/${params.bountyId}/event/${params.eventId}${path}`;

	return (
		<Link
			href={`/bounty/${params.bountyId}/event/${params.eventId}${path}`}
			className={cn("w-full rounded-[10px] px-4 py-[6px] font-medium ", {
				" bg-black text-white": isPath,
			})}
		>
			{name}
		</Link>
	);
}
