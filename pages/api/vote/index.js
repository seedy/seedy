import prisma from 'lib/prisma';

// POST /api/vote
export default async function handle(req, res) {
  if (req.method === 'POST') {
    const result = await prisma.vote.create();
    return res.json(result);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
