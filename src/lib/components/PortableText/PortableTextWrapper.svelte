<script lang="ts">
	import { PortableText } from '@portabletext/svelte';
	import type { InputValue } from '@portabletext/svelte';

	import Link from './Link.svelte';
	import ListItem from './ListItem.svelte';
	import Image from './Image.svelte';

	interface Props {
		value: InputValue | undefined;
	}

	const { value }: Props = $props();
</script>

<PortableText
	{value}
	components={{
		types: {
			image: Image
		},
		marks: {
			link: Link
		},
		listItem: ListItem
	}}
/>
