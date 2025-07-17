"use client";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useApp } from "@/context/app-context";
import { useWallet } from "@/context/wallet-context";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { ConnectWalletButton } from "../wallet/inedx";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useParams } from "next/navigation";

export default function BountyHeader() {
	const { activeAccount, isConnected, setOpenWalletModal } = useWallet();

	const params = useParams<{ bountydomain: string }>();
	return (
		<header className=" w-full bg-background">
			<div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-5 lg:px-10 xl:px-15">
				<Link href={"/"} className=" flex items-center gap-1">
					<span className="font-bold text-[28px]">{params.bountydomain}</span>{" "}
					<span className="font-extralight text-[28px]">X</span>
					<img src="/images/logo.svg" alt="logo" className="h-[30px] w-[143px]" />
				</Link>
				{isConnected ? <Component /> : <Bounty />}
			</div>
		</header>
	);
}

function Bounty() {
	const { setOpenWalletModal } = useWallet();
	const [open, setOpen] = useState(false);
	const params = useParams<{ bountydomain: string }>();

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>CreateEvent</Button>
			</DialogTrigger>

			<DialogContent className="gap-0 p-0 px-[18px] py-10 sm:max-h-[361px] sm:max-w-[365px] sm:rounded-[8px]">
				<DialogHeader className="mt-10 mb-3.5 gap-0.5">
					<DialogTitle className="font-semibold text-[16px] sm:text-center">
						Do you have an event bounty account?{" "}
					</DialogTitle>
					<DialogDescription className="text-[12px] sm:text-center">
						You’ll have an account if you’ve previously organised a funded event.
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col items-center justify-center gap-2 pt-8">
					<Button
						onClick={() => {
							setOpenWalletModal(true);
							setOpen(false);
						}}
					>
						Yes, I have an account
					</Button>

					<Button variant="outline" asChild>
						<Link href={`/www/${params.bountydomain}/form`}>
							No, I need to create an account
						</Link>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}

export function Component() {
	const params = useParams<{ bountydomain: string }>();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={"secondary"}>0x02a5...84aa</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="pb-2">
				<DropdownMenuItem
					className="cursor-pointer py-1 focus:bg-transparent focus:underline"
					asChild
				>
					<a href={`/www/${params.bountydomain}/profile`}>Profile</a>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
