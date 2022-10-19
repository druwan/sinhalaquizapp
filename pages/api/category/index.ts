import { NextApiRequest, NextApiResponse } from 'next';

const categories = [
  { id: 0, name: 'Alphabet' },
  { id: 1, name: 'Family' },
  { id: 2, name: 'Numbers' },
  { id: 3, name: 'Pronouns' },
  { id: 4, name: 'Time' },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ categories: categories });
}
