import { EMAIL_ADDRESS, SENDGRID_API_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import { json } from '@sveltejs/kit';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({ request }) {
	const { name, email, message } = await request.json();

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
		to: EMAIL_ADDRESS,
		from: EMAIL_ADDRESS,
		subject: 'Somebody reached out from your portfolio!',
		html: `Somebody used the contact form on your site. <br />
		Name: ${name},
		Email: ${email},
		Message: ${message}`
	};

	try {
		await sgMail.send(emailDraft);
		return json({
			emailSentSuccessfully: true
		});
	} catch (error) {
		return json({ error }, { status: 500 });
	}
}
