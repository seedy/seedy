import prisma from 'lib/prisma';

export const countVotes = async () => prisma.vote.count();

export const createVote = async () => prisma.vote.create();
