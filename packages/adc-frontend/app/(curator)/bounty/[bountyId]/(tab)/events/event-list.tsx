"use client";

import { CardBody, CardItem, CardList } from "@/components/card-list";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { events } from "@/constants/eevents";
import { useApp } from "@/context/app-context";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { toast } from "sonner";

export default function EventList() {
	const { events } = useApp();
	const params = useParams<{ bountyId: string }>();

	function onReject() {
		const onLog = async () => {
			return { status: "reject" };
		};
		return toast.promise(onLog, {
			loading: "loading...",
			success: "Success!",

			error: (err) => {
				console.log(err);
				return null;
			},
		});
	}

	function onApprove() {
		const onLog = async () => {
			return { status: "reject" };
		};
		return toast.promise(onLog, {
			loading: "loading...",
			success: "Success!",

			error: (err) => {
				console.log(err);
				return null;
			},
		});
	}

	function onReview() {
		const onLog = async () => {
			return { status: "reject" };
		};
		return toast.promise(onLog, {
			loading: "loading...",
			success: "Success!",

			error: (err) => {
				console.log(err);
				return null;
			},
		});
	}

	return (
		<CardList className="space-y-3">
			<CardBody variant={"title"}>
				<CardItem col={5} align={"left"} />
				<CardItem col={2}>Status</CardItem>
				<CardItem col={2}>Date range</CardItem>
				<CardItem col={2}>Created</CardItem>
				<CardItem />
			</CardBody>
			{events.map((event, index) => {
				return (
					<CardBody key={index}>
						<CardItem className="flex w-full items-center gap-2" col={5}>
							<img
								src={`https://avatar.vercel.sh/${event.name}?size=40`}
								alt={event.name}
								width={32}
								height={32}
								className="size-8 rounded-lg object-cover"
							/>
							<Link
								href={`/bounty/${params.bountyId}/event/${event.id}`}
								className="font-semibold text-base capitalize group-hover:underline"
							>
								{event.name}
							</Link>
						</CardItem>
						<CardItem col={2}>
							<Badge
								className={cn("p-2 capitalize", {
									"bg-[#CD9282]/[0.16] text-[#CD9282]": event.status === "reviewing",
									"bg-green-900/[0.16] text-green-900": event.status === "approved",
									"bg-red-500/[0.16] text-red-500": event.status === "rejected",
								})}
							>
								{event.status}
							</Badge>
						</CardItem>
						<CardItem col={2}>{event.date}</CardItem>
						<CardItem col={2}>{event.submittedAt}</CardItem>
						<CardItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Open menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem className="text-orange-400" onClick={onReview}>
										Reviewing
									</DropdownMenuItem>
									<DropdownMenuItem className="text-green-500" onClick={onApprove}>
										Approve
									</DropdownMenuItem>
									<DropdownMenuItem className="text-destructive" onClick={onReject}>
										Reject
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</CardItem>
					</CardBody>
				);
			})}
		</CardList>
	);
}
