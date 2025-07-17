"use client";

import { useId, useState } from "react";

import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

import Icons from "@/components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useApp } from "@/context/app-context";
import { useWallet } from "@/context/wallet-context";

export default function SearchBounty() {
	const id = useId();
	const { isConnected } = useWallet();
	const { bounties, bounty, selectBounty } = useApp();
	const [open, setOpen] = useState<boolean>(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					id={id}
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="flex w-full min-w-[326px] max-w-max items-center justify-between text-ellipsis rounded-[40px] px-4 py-3 font-medium text-base/[24px] outline-none outline-offset-0 focus-visible:outline-[3px]"
					disabled={!isConnected}
				>
					{bounty ? (
						<>
							{bounty.name} <Icons.arrowDown className="ml-auto size-6" />
						</>
					) : (
						<>
							Select bounty <Icons.arrowDown className="ml-auto size-6" />
						</>
					)}
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-full min-w-[var(--radix-popper-anchor-width)] border-input p-0"
				align="start"
			>
				<Command>
					<CommandInput placeholder="Search services..." />
					<CommandList>
						<CommandEmpty>No service found.</CommandEmpty>
						<CommandGroup>
							{bounties.map((item) => (
								<CommandItem
									key={item.name}
									value={item.name}
									onSelect={(currentValue) => {
										selectBounty(currentValue === bounty?.name ? "" : currentValue);
										setOpen(false);
									}}
									className="flex items-center justify-between"
								>
									<div className="flex items-center gap-2">{item.name}</div>
								</CommandItem>
							))}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
