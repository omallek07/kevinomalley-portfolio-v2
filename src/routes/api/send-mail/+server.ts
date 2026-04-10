import { EMAIL_ADDRESS, BREVO_EMAIL_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { BrevoClient } from '@getbrevo/brevo';

const brevo = new BrevoClient({
	apiKey: BREVO_EMAIL_API_KEY,
	maxRetries: 3 // Default: 2
});

export async function POST({ request }) {
	const { name, email, message } = await request.json();
	console.log('name:', name);
	console.log('email:', email);
	console.log('message:', message);

	if (!name || !email || !message) {
		return json(
			{
				message: 'Could not send email. Missing required fields.'
			},
			{
				status: 400
			}
		);
	}

	const emailDraft = {
		to: [{ email: EMAIL_ADDRESS }],
		sender: { name, email: email },
		subject: 'Somebody reached out from your portfolio!',
		htmlContent: `Somebody used the contact form on your site. <br /> Here are the details: <br />
		<strong>Name:</strong> ${name} <br />
		<strong>Email:</strong> ${email} <br />
		<strong>Message:</strong> ${message}`
	};

	try {
		await brevo.transactionalEmails.sendTransacEmail(emailDraft);
		return json({
			emailSentSuccessfully: true
		});
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
