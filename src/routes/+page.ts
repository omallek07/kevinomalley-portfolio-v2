import { sanityClient } from '$lib';
import type { PageLoad } from './$types';
import type { WorkExperience, Project } from '$lib/types/sanity';
import { processProjectEntries, processWorkExperienceEntries } from '$lib/utils/sanity';

export const load: PageLoad = async () => {
	const rawWorkExperience: WorkExperience[] = await sanityClient.fetch(
		'*[_type == "workExperience"] | order(startDate desc)'
	);

	const rawProjects: Project[] = await sanityClient.fetch(
		'*[_type == "project"] | order(dateAccomplished desc)'
	);

	const workExperience = rawWorkExperience.map(processWorkExperienceEntries);

	const projects = rawProjects.map(processProjectEntries);

	return { workExperience, projects };
};
