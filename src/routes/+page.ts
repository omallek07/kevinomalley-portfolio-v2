import { sanityClient } from '$lib';
import type { PageLoad } from './$types';
import type { DevExperience } from '../lib/types/sanity.d.ts';

export const load: PageLoad = async () => {
	const workExperience: DevExperience[] = await sanityClient.fetch(
		'*[_type == "devExperience"] | order(startDate desc)'
	);
	return { workExperience };
};
