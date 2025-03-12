<script lang="ts">
	import type { CustomBlockComponentProps } from '@portabletext/svelte';
	import type { RawImageContent } from '$lib/types/sanity';
	import { imageBuilder } from '$lib/utils/sanity';

	type Props = {
		portableText: CustomBlockComponentProps<RawImageContent>;
	};

	let { portableText }: Props = $props();
	let imageUrl = imageBuilder(portableText.value);
</script>

{#if imageUrl}
	<figure>
		<img class="portable-img" src={imageUrl} alt={'Image'} />
	</figure>
{/if}

<style>
	figure {
		margin: 2rem 0;
	}
	img {
		width: 100%;
		max-height: 450px;
		object-fit: cover;
		border-radius: 6px;
		border: 1px solid black;
	}
</style>
