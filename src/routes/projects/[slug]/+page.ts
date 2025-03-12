import { sanityClient } from '$lib';
import type { Project } from '$lib/types/sanity';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { processProjectEntries } from '$lib/utils/sanity';

export const load: PageLoad = async ({ params }) => {
	const { slug } = params;

	const rawProjects: Project[] = await sanityClient.fetch(
		`*[_type == "project" && slug == $slug]`,
		{
			slug
		}
	);

	if (rawProjects.length !== 1) {
		throw error(404, 'Project not found');
	}
	const project = processProjectEntries(rawProjects[0]);
	return {
		project
	};
};
