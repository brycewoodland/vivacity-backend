import { Request, Response } from 'express';
import pool from '../database/db';

const getApplicantInformation = async(req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM personal_info');
        res.json(result.rows);
    } catch (err) {
        console.error('Error querying the data.', err);
        res.status(500).send('Server error.');
    }
};

export default getApplicantInformation;
