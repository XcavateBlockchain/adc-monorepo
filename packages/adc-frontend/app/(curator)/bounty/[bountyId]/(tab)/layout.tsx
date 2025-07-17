import TabNav from "@/components/layout/tab-nav";

export default function TabLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<TabNav />
			<div className="overflow-hidden">{children}</div>
		</>
	);
}

// className="mt-[100px] flex flex-col items-center justify-center xl:px-[100px]"
