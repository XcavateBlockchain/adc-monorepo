"use client";

import { Button } from "@/components/ui/button";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useWallet } from "@/context/wallet-context";
import Icons from "./icons";
import { z } from "zod";
import Form, { useZodForm } from "./ui/form";
import { useState } from "react";
import { formatDate } from "@/lib/utils";

const messageSchema = z.object({
	date: z.string(),
	name: z.string(),
	message: z.string(),
});

type Input = z.infer<typeof messageSchema>;

export default function Messages() {
	const [messages, setMessages] = useState<Input[]>([]);
	const { isConnected } = useWallet();

	const from = useZodForm({
		schema: messageSchema,
		defaultValues: { name: "Alice", date: `${new Date()}` },
	});

	function onSubmit(data: Input) {
		setMessages([...messages, data]);
	}

	return (
		<div className="flex h-full flex-col space-y-4">
			<div className="flex-1">
				<ScrollArea className="h-[75vh] pb-0">
					<div className="space-y-[25px] px-4">
						{messages.length >= 1 ? (
							messages.map((item, index) => (
								<div key={index} className="flex w-full items-start gap-3">
									<Icons.user size={24} />
									<div className="flex w-full flex-col gap-4">
										<div className="flex items-center gap-3">
											<span>{item.name}</span>
											<span>{formatDate(item.date)}</span>
										</div>
										<p className="font-light text-[14px]/[20px]">{item.message}</p>
									</div>
								</div>
							))
						) : (
							<div className="flex items-center justify-center text-center">
								<h1>You do not have any message yet</h1>
							</div>
						)}
					</div>
				</ScrollArea>
			</div>
			{isConnected && (
				<div className="gap-6 pb-4">
					<Form form={from} onSubmit={from.handleSubmit(onSubmit)}>
						<div className="flex w-full items-center gap-2 rounded-lg border border-foreground/[0.10] px-4 py-0 focus:outline-none">
							<Textarea
								placeholder="Write comment"
								className="min-h-12 resize-none border-0 bg-transparent px-0 py-5 focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
								{...from.register("message")}
							/>
							<div className="flex gap-1 divide-x-2 px-1">
								<Button variant={"ghost"} size={"icon"} type="submit">
									<Icons.SendHorizonal className="size-6" />
								</Button>
							</div>
						</div>
					</Form>
				</div>
			)}
		</div>
	);
}
