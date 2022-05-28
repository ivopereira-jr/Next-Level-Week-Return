import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient({
	log: ['query']
});

// log vai mostrar as operações que estão sendo feitas no terminal
