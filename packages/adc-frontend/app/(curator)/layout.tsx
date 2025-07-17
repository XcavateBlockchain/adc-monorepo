import SiteHeader from "@/components/layout/site-header";

export default function CuratorLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<SiteHeader />
			<main className="grow">{children}</main>
		</div>
	);
}
