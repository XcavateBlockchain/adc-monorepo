import { Button } from "@/components/ui/button";
import { templates } from "@/constants/curators";
import { BookCopy, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Template({ id }: { id: string }) {
	return (
		<div className="flex h-full w-full flex-col gap-11 rounded-[10px] border border-[#C5C5C5] px-12 py-10 shadow">
			<h1 className="text-center font-bold text-[40px]">Event Form Templates</h1>

			<div className="grid grid-cols-4 gap-4">
				{templates.map((temp, index) => (
					<Link
						key={index}
						href={`/www/${id}/event/${temp.id}/new`}
						className="flex h-full cursor-pointer flex-col items-center justify-center gap-2 rounded-[8px] border border-[#F3F3F3] px-10 py-10 text-center shadow transition-all duration-200 hover:border-gray-400"
					>
						<BookCopy size={16} />
						{temp.title}
					</Link>
				))}
			</div>
		</div>
	);
}
