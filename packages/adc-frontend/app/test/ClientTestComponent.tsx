'use client';

import { useEffect, useState } from 'react';
import { AssetDidCommClient, MockStorageAdapter, KiltDidResolver, PinataStorageAdapter } from 'assetdidcomm-client';
import type { JWK } from 'jose';
import { LucideMousePointerSquareDashed } from 'lucide-react';

const mockSigner = {
  getAddress: () => 'did:mock:signer',
  signRaw: async (payload: any) => ({ signature: 'mock-raw-sig' }),
  signPayload: async (payload: any) => ({ signature: 'mock-payload-sig' }),
};


const PINATA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzN2RiNGQ4NS0xMmVlLTQ2MjQtOTA4MC1hZWMwOTY1NmFkNGEiLCJlbWFpbCI6ImNjYW1wYmVsbC5qYW1lc0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNGY4NDI4YmEzZTNkMTA5YmVjN2QiLCJzY29wZWRLZXlTZWNyZXQiOiI5YWMwNjlhNDVjNmZmODdjNzdkNTVkZjBjNmFkNWYxYzhmZDFlM2Y3YjQ1ODcwNWM5NmJmYjU4Nzc4YzFmYTZkIiwiZXhwIjoxNzgxMDkzNTUxfQ.UekiIJBEMuCVmgPhK-WWCXQZ5FAA0gdM-_OsVWx8Zhs'
const PINATA_GATEWAY = 'orange-objective-gerbil-959.mypinata.cloud'
export default function ClientTestComponent() {
  const [testStatus, setTestStatus] = useState<string>('Testing import...');

  useEffect(() => {
    // --- THIS PART IS THE SAME AS BEFORE ---
    try {
      console.log('Attempting to instantiate AssetDidCommClient...');
      const testConfig = {
        storageAdapter: new PinataStorageAdapter({ jwt: PINATA_JWT, publicGateway: `https://${PINATA_GATEWAY}/ipfs` }),
        didResolver: new KiltDidResolver(),
        signer: mockSigner,
        resolveBucketKey: async (keyId: string): Promise<JWK | null> => {
          const keyMap: { [key: string]: JWK } = {
            '83196158930': { "crv": "X25519", "x": "QE5KL9DR8QIFmfTvjE0v-7KGO86UmOautGzqyPwyhQU", "kty": "OKP", "use": "enc", "kid": "83196158930" }
          };
          return keyMap[keyId] || null;
        },
        rpcEndpoint: 'wss://fraa-flashbox-4654-rpc.a.stagenet.tanssi.network'
      };
      const client = new AssetDidCommClient(testConfig);
      console.log('✅ Successfully created an instance of AssetDidCommClient:', client);
      setTestStatus('✅ Success! Client instantiated on the client-side.');
    } catch (error: any) {
      console.error('❌ Failed to instantiate AssetDidCommClient:', error);
      setTestStatus(`❌ Failed. Error: ${error.message}`);
    }
  }, []);

  return (
    <>
      <h2>Test Status:</h2>
      <p style={{ fontWeight: 'bold', color: testStatus.startsWith('✅') ? 'green' : 'red' }}>
        {testStatus}
      </p>
      <p>Check the browser's developer console for more details.</p>
    </>
  );
}