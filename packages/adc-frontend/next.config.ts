import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	// Already doing linting and typechecking as separate tasks in CI
	eslint: { ignoreDuringBuilds: true },
	typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
