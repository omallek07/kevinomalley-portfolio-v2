import ImageUrlBuilder from '@sanity/image-url';
import { createClient, type ClientConfig } from '@sanity/client';
import type {
	Project,
	WorkExperience,
	ProcessedProject,
	ProcessedWorkExperience,
	RawTextContent,
	RawImageContent,
	ProcessedTextContent,
	ProcessedImageContent
} from '$lib/types/sanity';

const config: ClientConfig = {
	projectId: 'fnkipk9u',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-02-04'
};

const sanityClient = createClient(config);
const builder = ImageUrlBuilder(sanityClient);

function processContent(content: RawTextContent | RawImageContent) {
	if (content._type === 'block') {
		// process text content
		const processedTextContent: ProcessedTextContent = {
			type: 'text',
			style: content.style,
			textToRender: content.children.map((elem) => elem.text).join('\n')
		};
		return processedTextContent;
	} else {
		// process image content
		const imageUrl = builder.image(content).url();
		const processedImage: ProcessedImageContent = {
			type: 'image',
			url: imageUrl
		};
		return processedImage;
	}
}

export function processWorkExperienceEntries(rawExperience: WorkExperience) {
	const companyImageUrl = builder.image(rawExperience.companyImage).url();

	const processedExperience: ProcessedWorkExperience = {
		jobTitle: rawExperience.jobTitle,
		company: rawExperience.company,
		companyLink: rawExperience.companyLink,
		startDate: rawExperience.startDate,
		endDate: rawExperience.endDate,
		companyImageUrl,
		workDescription: rawExperience.workDescription.map(processContent)
	};

	return processedExperience;
}

export function processProjectEntries(rawProject: Project) {
	const projectImageUrl = builder.image(rawProject.image).url();

	const processedProject: ProcessedProject = {
		name: rawProject.name,
		company: rawProject.company,
		dateAccomplished: rawProject.dateAccomplished,
		stack: rawProject.stack,
		slug: rawProject.slug.current,
		projectImageUrl,
		content: rawProject.content.map(processContent)
	};

	return processedProject;
}

export function getTagFromSanityStyle(style: ProcessedTextContent['style']): string {
	if (style === 'normal') {
		return 'p';
	} else {
		return style;
	}
}
export default sanityClient;
