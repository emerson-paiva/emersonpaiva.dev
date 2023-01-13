import { readdirSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  slugs: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const files = readdirSync('posts/');
  const slugs = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''));

  res.status(200).json({ slugs });
}
