<script lang="ts">
	import ActivityCalendarWidget from 'activity-calendar-widget/svelte';

	let data = $state<{ date: string; activities: number[] }[]>([]);

	type GithubContribution = {
		date: string;
		count: number;
		level: number;
	};

	const loadGithubActivity = async () => {
		// 1. Call Github events API
		const publicGithubId = 'omallek07';
		const githubApi = `https://github-contributions-api.jogruber.de/v4/${publicGithubId}`;
		const response = await fetch(githubApi);
		const payload = await response.json();

		// 2. Report error if exists
		if (!payload?.contributions) {
			return;
		}

		// 3. Construct the data array which expects obj with 2 keys
		// date: 'yyyy-MM-dd'
		// activities: array of anything
		const newData = payload.contributions.map((contribution: GithubContribution) => {
			return {
				date: contribution.date,
				activities: new Array(contribution.count).fill(0)
			};
		});
		data = newData;
	};
	loadGithubActivity();
</script>

<div class="calendar-container">
	<div class="laptop">
		<ActivityCalendarWidget
			{data}
			daysToRender={150}
			levelColorMode={'dark'}
			levelColors={['#021f1f', '#055e5e', '#068f8f', '#06d1d1', '#07ffff']}
		/>
	</div>
	<div class="mobile">
		<ActivityCalendarWidget
			{data}
			daysToRender={100}
			levelColorMode={'dark'}
			levelColors={['#021f1f', '#055e5e', '#068f8f', '#06d1d1', '#07ffff']}
		/>
	</div>
</div>

<style>
	.calendar-container {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
