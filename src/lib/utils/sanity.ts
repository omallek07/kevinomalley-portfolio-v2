import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: 'fnkipk9u',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-02-04'
};

const sanityClient = createClient(config);

export default sanityClient;
