import { prisma } from '../../prisma';
import {
	FeedbackCreateData,
	FeedbacksRepository
} from '../feedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
	async create({ type, comment, screenshot }: FeedbackCreateData) {
		await prisma.feedback.create({
			// o data são os dados que vão ser inseridos
			data: {
				type,
				comment,
				screenshot
			}
			// tem o select que serve para pegar dados depois da criação
		});
	}
}
