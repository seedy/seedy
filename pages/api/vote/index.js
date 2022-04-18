import { countVotes, createVote } from 'lib/prisma/votes';

// HANDLER /api/vote
export default async function handle(req, res) {
  // POST /api/vote
  if (req.method === 'POST') {
    const result = await createVote();
    return res.json(result);
  }
  // GET /api/vote
  if (req.method === 'GET') {
    const result = await countVotes();
    return res.json(result);
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
