import { NextApiRequest, NextApiResponse } from "next";

const categories = [
  {id: 0, topic: 'Alphabet'},
  {id: 1, topic: 'Family'},
  {id: 2, topic: 'Numbers'},
  {id: 3, topic: 'Pronouns'},
  {id: 4, topic: 'Time'},
]

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({categories: categories})
}