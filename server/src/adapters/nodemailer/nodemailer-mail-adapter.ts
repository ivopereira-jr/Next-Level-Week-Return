import nodemailer from 'nodemailer';

import { MailAdapter, SendmailData } from '../mail-adpter';

const transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: 'c1a3a87915be68',
		pass: 'c3c9b106842fa8'
	}
});

export class NodeMailerAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendmailData) {
		await transport.sendMail({
			from: 'Equipe Feedget <oi@feedget.com>',
			to: 'Ivo pereira <ivopereira.jr12@,gmail.com>',
			subject,
			html: body
		});
	}
}
