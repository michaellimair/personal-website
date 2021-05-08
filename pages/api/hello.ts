import type { NextApiRequest, NextApiResponse } from 'next';

const helloAPI = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json({ name: 'John Doe' });
};

export default helloAPI;
