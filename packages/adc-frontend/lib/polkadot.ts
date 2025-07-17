import { ApiPromise, HttpProvider, WsProvider } from "@polkadot/api";
import type { ApiOptions } from "@polkadot/api/types";

/**
 * Helper to initialize polkadot.js API with given chain and options.
 */
export const initPolkadotJs = async (
	rpcUrl: string,
	options?: ApiOptions,
): Promise<{ api: ApiPromise; provider: WsProvider | HttpProvider }> => {
	if (!rpcUrl) {
		throw new Error("Given chain has no RPC url defined");
	}

	const provider = rpcUrl.startsWith("http")
		? new HttpProvider(rpcUrl)
		: new WsProvider(rpcUrl);
	const api = await ApiPromise.create({
		provider,
		...options,
	});

	return { api, provider };
};
