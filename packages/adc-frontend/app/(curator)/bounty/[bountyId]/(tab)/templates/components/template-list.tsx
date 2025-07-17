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
import { templates } from "@/constants/curators";
import { cn } from "@/lib/utils";
import { Calendar, MessageSquare, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Event {
	id: string;
	title: string;
	image: string;
	responses: number;
	updated: string;
}

const events: Event[] = [
	{
		id: "1",
		title: "Extraordinary Event",
		image: "/placeholder.svg?height=60&width=60",
		responses: 58,
		updated: "08 May 2025",
	},
	{
		id: "2",
		title: "Meetup",
		image: "/placeholder.svg?height=60&width=60",
		responses: 29,
		updated: "05 May 2025",
	},
	{
		id: "3",
		title: "Key Industry Event",
		image: "/placeholder.svg?height=60&width=60",
		responses: 16,
		updated: "04 May 2025",
	},
];

interface ITemplate {
	id: number;
	title: string;
	image: string;
	description?: string;
	responses?: number;
	updated: string;
	active: boolean;
}

const eventTemplate: ITemplate = {
	id: 1,
	title: "Event organizer application form",
	image: "",
	responses: 50,
	updated: "04 May 2025",
	active: true,
};

export default function TemplateView({ bountyId }: { bountyId: string }) {
	const searchParams = useSearchParams();
	const view = searchParams.get("view") ?? "list";

	const ListView = () => (
		<CardList>
			<CardBody variant={"title"}>
				<CardItem col={6} align={"left"}>
					Name
				</CardItem>
				<CardItem>Status</CardItem>
				<CardItem col={2}>Responses</CardItem>
				<CardItem col={2}>Updated</CardItem>
				<CardItem />
			</CardBody>
			{templates.map((template) => (
				<CardBody key={template.id} className="group">
					<CardItem className="flex items-center gap-2" col={6}>
						<img
							src={`https://avatar.vercel.sh/${template.title}?size=40`}
							alt={template.title}
							width={48}
							height={48}
							className="size-10 rounded-lg object-cover"
						/>
						<Link
							href={`/bounty/${bountyId}/form/${template.id}`}
							className="font-medium group-hover:underline"
						>
							{template.title}
						</Link>
					</CardItem>
					<CardItem>
						<Badge
							variant="outline"
							className={cn("", {
								" border-blue-900 text-blue-900": template.active === true,
							})}
						>
							{template.active === true ? "Active" : "Disabled"}
						</Badge>
					</CardItem>
					<CardItem col={2}>{template.responses}</CardItem>
					<CardItem col={2}>{template.updated}</CardItem>
					<CardItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
									<MoreHorizontal className="h-4 w-4" />
									<span className="sr-only">Open menu</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Edit Template</DropdownMenuItem>
								<DropdownMenuItem>View Details</DropdownMenuItem>
								<DropdownMenuItem className="text-destructive">
									Delete Template
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</CardItem>
				</CardBody>
			))}
		</CardList>
	);

	const GridView = () => (
		<div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
			{events.map((event) => (
				<div
					key={event.id}
					className="flex flex-col gap-6 rounded-xl border bg-card py-6 text-card-foreground shadow-sm"
				>
					<div className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 p-4 px-6 d[.border-b]:pb-6">
						<div className="mb-3 flex items-start justify-between">
							<img
								src={`https://avatar.vercel.sh/${event.title}?size=40`}
								alt={event.title}
								width={60}
								height={60}
								className="rounded-lg object-cover"
							/>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
										<MoreHorizontal className="h-4 w-4" />
										<span className="sr-only">Open menu</span>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end">
									<DropdownMenuItem>Edit Template</DropdownMenuItem>
									<DropdownMenuItem>View Template</DropdownMenuItem>
									<DropdownMenuItem className="text-destructive">
										Delete Template
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>

						<h3 className="mb-3 line-clamp-2 font-semibold text-lg">{event.title}</h3>

						<div className="flex items-center justify-between text-muted-foreground text-sm">
							<div className="flex items-center gap-1">
								<MessageSquare className="h-4 w-4" />
								<span>{event.responses} responses</span>
							</div>
							<div className="flex items-center gap-1">
								<Calendar className="h-4 w-4" />
								<span>{event.updated}</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);

	return (
		<div className="mx-auto w-full max-w-6xl">
			<CardList className="mb-8">
				<CardBody variant={"title"}>
					<CardItem col={6} align={"left"}>
						Name
					</CardItem>
					<CardItem>Status</CardItem>
					<CardItem col={2}>Responses</CardItem>
					<CardItem col={2}>Updated</CardItem>
					<CardItem />
				</CardBody>

				<CardBody key={eventTemplate.id} className="group">
					<CardItem className="flex items-center gap-2" col={6}>
						<img
							src={`https://avatar.vercel.sh/${eventTemplate.title}?size=40`}
							alt={eventTemplate.title}
							width={48}
							height={48}
							className="size-10 rounded-lg object-cover"
						/>
						<Link
							href={`/bounty/${bountyId}/form`}
							className="font-medium group-hover:underline"
						>
							{eventTemplate.title}
						</Link>
					</CardItem>
					<CardItem>
						<Badge
							variant="outline"
							className={cn("", {
								" border-blue-900 text-blue-900": eventTemplate.active === true,
							})}
						>
							{eventTemplate.active === true ? "Active" : "Disabled"}
						</Badge>
					</CardItem>
					<CardItem col={2}>{eventTemplate.responses}</CardItem>
					<CardItem col={2}>{eventTemplate.updated}</CardItem>
					<CardItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
									<MoreHorizontal className="h-4 w-4" />
									<span className="sr-only">Open menu</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								<DropdownMenuItem>Edit Template</DropdownMenuItem>
								<DropdownMenuItem>View Details</DropdownMenuItem>
								<DropdownMenuItem className="text-destructive">
									Delete Template
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</CardItem>
				</CardBody>
			</CardList>
			<div className="min-h-[400px]">{view === "list" ? <ListView /> : <GridView />}</div>
		</div>
	);
}
