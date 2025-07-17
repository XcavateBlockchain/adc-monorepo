"use client";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Form({ params }: { params: { bountydomain: string } }) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<header className=" w-full bg-background">
				<div className="container mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-5 lg:px-10 xl:px-15">
					<Link href={"/"} className=" flex items-center gap-1">
						<span className="font-bold text-[28px]">EB</span>{" "}
						<span className="font-extralight text-[28px]">X</span>
						<img src="/images/logo.svg" alt="logo" className="h-[30px] w-[143px]" />
					</Link>
				</div>
			</header>
			<main className="flex-1">
				<Shell className="lg:mt-20 xl:px-[188px]">
					<div className="mt-[34px] flex w-full flex-col rounded-[10px] border px-[53px] py-10 shadow">
						<p className="mb-10 font-medium text-[18px]">
							Tell us about yourself and your event idea
						</p>
						<div className="grid grid-cols-1 gap-[36px]">
							<Input label="Name" type="email" placeholder="" />

							<Input label="Email address" type="email" placeholder="" />
							<Input label="How long have you been in the Polkadot eco-system?" type="text" />
							<Input label="Title of your proposed event" type="text" />
							<Input label="Summary / Description of your event" type="text" />

							<div className="mt-10 flex items-center justify-center">
								<Button>
									<Link href={`/www/${params.bountydomain}`}>Save</Link>
								</Button>
							</div>
						</div>
					</div>
				</Shell>
			</main>
		</div>
	);
}
