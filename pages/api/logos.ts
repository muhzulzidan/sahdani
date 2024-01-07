// pages/api/logos.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const logosDirectory = path.join(process.cwd(), 'public/images/logo-clients');
    const filenames = fs.readdirSync(logosDirectory);
    const logos = filenames.map(filename => `/images/logo-clients/${filename}`);

    res.status(200).json({ logos });
}
