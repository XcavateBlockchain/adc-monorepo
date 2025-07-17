"use client";

import { CardBody, CardItem, CardList } from "@/components/card-list";
import Icons from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { applicants } from "@/constants/applications";
import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ApplicationList() {
	const params = useParams<{ bountyId: string; applicationid: string }>();
	return (
		<CardList className="space-y-3">
			<CardBody variant={"title"}>
				<CardItem col={6} align={"left"} />
				<CardItem col={2}>Status</CardItem>
				<CardItem col={3}>submitted</CardItem>
				<CardItem />
			</CardBody>
			{applicants.map((applicant) => {
				return (
					<CardBody className="group" key={applicant.id}>
						<CardItem className="flex items-center gap-2" col={6}>
							<Icons.UserOutlineIcon className="size-6" />
							<Link
								href={`/bounty/${params.bountyId}/application/${applicant.id}`}
								className="font-semibold text-base capitalize group-hover:underline"
							>
								{applicant.name} ({applicant.organization})
							</Link>
						</CardItem>
						<CardItem col={2}>
							<Badge
								className={cn("p-2 capitalize", {
									"bg-[#CD9282]/[0.16] text-[#CD9282]": applicant.status === "reviewing",
									"bg-green-900/[0.16] text-green-900": applicant.status === "approved",
									"bg-red-500/[0.16] text-red-500": applicant.status === "rejected",
								})}
							>
								{applicant.status}
							</Badge>
						</CardItem>
						<CardItem col={3}>{applicant.created}</CardItem>
						<CardItem>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Open menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Update</DropdownMenuItem>
									<DropdownMenuItem>View Details</DropdownMenuItem>
									<DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</CardItem>
					</CardBody>
				);
			})}
		</CardList>
	);
}
