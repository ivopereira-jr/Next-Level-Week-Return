import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

// spies = espiões para saber se funções/função foi chamada
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
	{ create: createFeedbackSpy },
	{ sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
	it('should br able to submit a feedback', async () => {
		await expect(
			submitFeedback.execute({
				type: 'BUG',
				comment: 'example comment',
				screenshot: 'data:image/png;base64,8fefwf2'
			})
		).resolves.not.toThrow();

		/* 
      resolves como esta sendo usado uma função async o resolves e como que esperamos que a função seja feita/resolvida
      not.toThrow() e com esses e que a função seja finalizada sem erros
    */

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	});

	it('should not be able to submit feedback without type', async () => {
		await expect(
			submitFeedback.execute({
				type: '',
				comment: 'example comment',
				screenshot: 'data:image/png;base64,8fefwf2'
			})
		).rejects.toThrow(); // o rejects para quando vc espera que de erro
	});

	it('should not be able to submit feedback without comment', async () => {
		await expect(
			submitFeedback.execute({
				type: 'BUG',
				comment: '',
				screenshot: 'data:image/png;base64,8fefwf2'
			})
		).rejects.toThrow();
	});

	it('should not be able to submit feedback with an invalid screenshot', async () => {
		await expect(
			submitFeedback.execute({
				type: 'BUG',
				comment: 'example comment',
				screenshot: 'test.jpg'
			})
		).rejects.toThrow();
	});
});
