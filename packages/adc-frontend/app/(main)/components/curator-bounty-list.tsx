"use client";

import Icons from "@/components/icons";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useApp } from "@/context/app-context";
import { cn } from "@/lib/utils";
import Link from "next/link";

const _items = [
	{
		id: "1",
		name: "Alex Thompson",
		status: true,
	},
	{
		id: "2",
		name: "Sarah Chen",
		status: true,
	},
	{
		id: "3",
		name: "James Wilson",
		status: false,
	},
	{
		id: "4",
		name: "Maria Garcia",
		status: true,
	},
	{
		id: "5",
		name: "David Kim",
		status: true,
	},
	{
		id: "6",
		name: "John Brown",
		status: true,
	},
	{
		id: "7",
		name: "Jane Doe",
		status: false,
	},
	{
		id: "8",
		name: "Peter Smith",
		status: true,
	},
	{
		id: "9",
		name: "Olivia Lee",
		status: true,
	},
	{
		id: "10",
		name: "Liam Chen",
		status: false,
	},
	{
		id: "11",
		name: "Ethan Kim",
		status: true,
	},
	{
		id: "12",
		name: "Ava Brown",
		status: true,
	},
	{
		id: "13",
		name: "Lily Lee",
		status: true,
	},
	{
		id: "14",
		name: "Noah Smith",
		status: false,
	},
	{
		id: "15",
		name: "Eve Chen",
		status: true,
	},
];

interface CuratorListProps {
	shouldShowNav?: boolean;
	maxHeight?: string;
}

export default function CuratorBountyList({
	shouldShowNav = false,
	maxHeight = "[&>div]:max-h-[30vh]",
}: CuratorListProps) {
	const { isLoading, bounty } = useApp();

	if (isLoading) {
		return (
			<div className="mb-4 w-full max-w-[920px]">
				<div className="grid w-full grid-cols-1 gap-4">
					{Array.from({ length: 5 }, (_, i) => (
						<div key={i} className="grid grid-cols-4 gap-4">
							<Skeleton className="h-4 w-full rounded bg-gray-400" />
							<Skeleton className="h-4 w-full rounded bg-gray-400" />

							<Skeleton className="h-4 w-full rounded bg-gray-400" />

							<Skeleton className="h-4 w-full rounded bg-gray-400" />
						</div>
					))}
				</div>
			</div>
		);
	}

	if (!bounty) {
		return null;
	}

	return (
		<div className="w-full max-w-[920px]">
			<div className="mb-4.5 flex w-full items-center gap-[9px] text-sm">
				<span>Add Curators</span>
				<Separator className="max-w-[826px]" />
			</div>

			<div className={cn(maxHeight)}>
				<Table>
					<TableHeader className="sticky top-0 z-10 bg-background/90 backdrop-blur-xs [&_tr]:border-b-0">
						<TableRow className="border-y-0 *:border-border-0 hover:bg-transparent [&>:not(:last-child)]:border-r-0">
							<TableHead />
							<TableHead align="center" className="text-center capitalize">
								<span>Asset-wide permissions</span>
							</TableHead>
							<TableHead />
							<TableHead />
						</TableRow>
					</TableHeader>
					<TableBody>
						{bounty?.curators.map((item) => {
							return (
								<TableRow key={item.id} className="border-dashed *:border-border">
									<TableCell className="font-medium text-foreground">
										<div className="flex items-center gap-3">
											<Avatar>
												<AvatarFallback>
													<Icons.user size={16} className="opacity-60" aria-hidden="true" />
												</AvatarFallback>
											</Avatar>
											<span className="font-medium">{item.name}</span>
										</div>
									</TableCell>
									<TableCell className="text-right">
										<div className=" flex w-full items-center justify-center gap-3">
											<label htmlFor="terms">Manager</label>
											<Checkbox id={item.name} defaultChecked={item.status} />
										</div>
									</TableCell>
									<TableCell>
										<Button variant={"ghost"}>
											<Icons.message />
										</Button>
									</TableCell>
									<TableCell className="text-right">
										<Button variant={"ghost"}>
											<Icons.circleX />
										</Button>
									</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</div>
			<Button variant={"secondary"} className="mt-[30px]">
				<Icons.add className="" aria-hidden="true" />
				Add Curator
			</Button>

			{shouldShowNav && (
				<div className="flex items-center justify-center">
					<Button asChild>
						<Link href={"/bounty/1"}>Continue</Link>
					</Button>
				</div>
			)}
		</div>
	);
}
