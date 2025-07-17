"use client";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { templates } from "@/constants/curators";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";
import BountyLayout from "../../../components/bounty-layout";
import CreateEventFrom from "./create-event-from";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
	const router = useRouter();
	const { id } = use(params);

	const template = templates.find((data) => data.id === Number(id));

	return (
		<BountyLayout>
			<Shell className="lg:mt-5">
				<Button variant={"link"} onClick={() => router.back()}>
					<ArrowLeft /> Back
				</Button>
				{/* <BountyForm name={template?.title} /> */}
				<CreateEventFrom template={template?.title} />
			</Shell>
		</BountyLayout>
	);
}
