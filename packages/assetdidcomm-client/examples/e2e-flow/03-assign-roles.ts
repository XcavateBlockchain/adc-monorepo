import { setup, readState, ADMIN_DID, CONTRIBUTOR_DID, MANAGER_DID } from './_setup';

async function main() {
    // We need both manager and admin clients for this step
    const { managerClient, adminClient, disconnectAll } = await setup();
    const state = readState();

    if (!state.namespaceId || state.bucketId === undefined) {
        throw new Error("Namespace/Bucket ID not found in e2e-state.json. Please run previous scripts first.");
    }

    try {
        // --- Step 3: Assign Admin by Manager ---
        console.log(`\n--- [MANAGER] 3a. Assigning Admin (${ADMIN_DID}) to Bucket ${state.bucketId} ---`);
        const adminTxHash = await managerClient.addAdmin(state.namespaceId, state.bucketId, ADMIN_DID);
        console.log(`✅ Admin assigned successfully. Transaction Hash: ${adminTxHash}`);

        // --- Step 4: Assign Contributor by Admin ---
        console.log(`\n--- [ADMIN] 3b. Assigning Contributor (${CONTRIBUTOR_DID}) to Bucket ${state.bucketId} ---`);
        const contributorTxHash = await adminClient.addContributor(state.namespaceId, state.bucketId, CONTRIBUTOR_DID);
        console.log(`✅ Contributor assigned successfully. Transaction Hash: ${contributorTxHash}`);

        // --- Step 5: Assign Contributor by Admin ---
        console.log(`\n--- [ADMIN] 3c.  Admin grants self Contributor role - Assigning Contributor (${ADMIN_DID}) to Bucket ${state.bucketId} ---`);
        const adminAsContributorTxHash = await adminClient.addContributor(state.namespaceId, state.bucketId, ADMIN_DID);
        console.log(`✅ Admin assigned as Contributor successfully. Transaction Hash: ${adminAsContributorTxHash}`);

        // --- Step 6: Assign Contributor by Admin ---
        console.log(`\n--- [ADMIN] 3d.  Admin grants the Manager Contributor role - Assigning Contributor (${MANAGER_DID}) to Bucket ${state.bucketId} ---`);
        const managerAsContributorTxHash = await adminClient.addContributor(state.namespaceId, state.bucketId, MANAGER_DID);
        console.log(`✅ Manager assigned as Contributor successfully. Transaction Hash: ${managerAsContributorTxHash}`);

    } catch (error) {
        console.error("\n❌ Error in Step 3: Assign Roles", error);
        process.exit(1);
    } finally {
        await disconnectAll();
    }
}

main().catch(console.error);