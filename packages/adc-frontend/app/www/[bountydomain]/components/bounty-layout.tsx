import BountyHeader from "@/components/layout/bounty-header";

export default function BountyLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<BountyHeader />
			<main className="flex-1">{children}</main>
		</div>
	);
}
