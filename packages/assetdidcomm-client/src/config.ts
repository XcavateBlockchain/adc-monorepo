import type { ResolutionResult, Did } from '@kiltprotocol/types';
import { JWK } from 'jose';


export interface StorageAdapter {
    upload: (data: Uint8Array | string) => Promise<string>; // Returns CID/URL
    download: (identifier: string) => Promise<Uint8Array>;
}


export interface SignerPayloadRaw {
    address: string;
    data: string; // hex string
    type: 'bytes';
}

export interface Signer {
    // This method will be used to create the Crust auth header.
    signRaw(raw: SignerPayloadRaw): Promise<{ signature: string }>;

    // We'll keep signPayload for signing actual extrinsics.
    // The Polkadot.js API handles the creation of this payload.
    signPayload(payload: any): Promise<{ signature: string }>;

    // The address of the signer, used for creating payloads and identifying the user.
    getAddress(): string;
}
export interface AssetDidCommClientConfig {
    storageAdapter: StorageAdapter;
    rpcEndpoint?: string; // For Substrate pallet (optional for initial mock)
    didResolver: DidResolver; // To fetch DIDs for keys
    signer: Signer; // To sign transactions
    // Potentially default KILT API endpoint if not covered by didResolver
    resolveBucketKey: (keyId: string) => Promise<JWK | null>;
}

export interface DidResolver {
    resolve(did: Did | string): Promise<ResolutionResult | any>
}