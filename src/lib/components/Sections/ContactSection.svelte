<script lang="ts">
	import { PUBLIC_CONTACT_ME_LINK } from '$env/static/public';
	import { Button, SectionHeadline } from '$lib';

	let contactName = $state('');
	let contactEmail = $state('');
	let contactMessage = $state('');
	let isFormInvalid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	async function onSubmit(event: Event) {
		event.preventDefault();
		if (!contactName || !contactEmail || !contactMessage) {
			isFormInvalid = true;
			return;
		}

		isLoading = true;
		const response = await fetch('/api/send-mail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: contactName,
				email: contactEmail,
				message: contactMessage
			})
		});
		//isLoading = false;
		if (response.ok) {
			isEmailSent = true;
		} else {
			showErrorMessage = true;
		}
	}

	$effect(() => {
		if (contactName || contactEmail || contactMessage) {
			isFormInvalid = false;
		}
	});
</script>

<section class="section">
	<SectionHeadline headline="Contact Me" id={PUBLIC_CONTACT_ME_LINK.slice(2)} />
	<div class="wrapper default-margin">
		{#if isEmailSent}
			<div class="spinner-container">
				<h3>Thank you for getting in contact with me. I'll usually reply within 48 hours.</h3>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
				<h3>Sending your message...</h3>
			</div>
		{:else if showErrorMessage}
			<h3>
				We seem to have trouble with our server at the moment. Please send me an email directly to <a
					class="link"
					href="mailto:kevin@kevinomalley.dev">kevin@kevinomalley.dev</a
				>
			</h3>
		{:else}
			<form>
				<input
					type="text"
					class="text-input"
					class:input-error={isFormInvalid}
					placeholder="Your Name"
					bind:value={contactName}
				/>
				<input
					type="email"
					class:input-error={isFormInvalid}
					class="text-input"
					placeholder="Your Email"
					bind:value={contactEmail}
				/>
				<textarea
					class="text-input"
					class:input-error={isFormInvalid}
					placeholder="Your Message"
					bind:value={contactMessage}
				></textarea>
				<div class="btn-wrapper">
					<Button onclick={onSubmit}>Submit</Button>
				</div>
			</form>
		{/if}
		<div class="form-text">
			<h3 class="bold mb-s">Feel free to reach out!</h3>
			<p>
				I'm always open to new opportunities and collaborations. If you have a project in mind or
				just want to say hi, feel free to send me a message!
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 7rem;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.form-text {
		width: 90%;
	}
	form {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: flex-start;
		margin-top: 4rem;
	}
	form * {
		font-size: 2rem;
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: black;
	}
	textarea,
	input {
		width: 100%;
		background-color: var(--white-1);
		border-radius: 8px;
		padding: 4px 12px;
		margin-bottom: 3rem;
		outline: none;
		border: none;
		box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.4);
		transition: box-shadow 400s ease-out;
	}

	textarea:focus-visible,
	input:focus-visible {
		outline: 2px solid var(--red);
	}

	input {
		height: 4.8rem;
	}
	textarea {
		height: 12rem;
	}
	textarea:placeholder,
	input:placeholder {
		font-size: clamp(2rem, 3vw, 2.2rem);
		font-weight: 400;
	}

	.btn-wrapper {
		width: 100%;
		text-align: right;
		margin-bottom: 2rem;
	}

	.input-error {
		background-color: rgba(233, 87, 87, 0.667);
	}
	.input-error::placeholder {
		color: white;
	}
	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: black;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		display: inline-block;
		margin-right: 8px;
		animation: spin 1s linear infinite;
	}
	.spinner-container {
		display: flex;
	}

	@media (min-width: 1024px) {
		section {
			padding-bottom: 14rem;
		}
		.wrapper {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}
		form {
			width: 45%;
			margin-top: 0;
		}

		.form-text {
			width: 30%;
		}

		.btn-wrapper {
			margin-bottom: 0;
			text-align: left;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
