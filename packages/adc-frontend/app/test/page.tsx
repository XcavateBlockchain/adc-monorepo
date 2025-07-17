'use client'

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// --- THIS IS THE MAGIC ---
// We are dynamically importing our component with the 'ssr' option set to 'false'.
// This tells Next.js: "Do not pre-render this component on the server."
const ClientSideOnlyComponent = dynamic(
  () => import('./ClientTestComponent'), // The path to our new component
  {
    ssr: false, // This is the crucial setting
    // Optional: Show a loading message while the component is being loaded.
    loading: () => <p>Loading client component...</p>,
  }
);

// This is now a simple, server-safe page component.
export default function TestPage() {
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>Library Import Test</h1>
      <p>This page will dynamically load a client-side-only component.</p>
      <hr />
      
      {/* We render the dynamically imported component here */}
      <Suspense fallback={<div>Loading...</div>}>
         <ClientSideOnlyComponent />
      </Suspense>

    </main>
  );
}