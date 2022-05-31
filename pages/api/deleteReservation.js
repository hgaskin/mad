import { reservationsTable } from './utils/Airtable';

export default async (req, res) => {
    const { id } = req.body;
    try {
        const deletedRecord = await reservationsTable.destroy([ id ]);
        res.statusCode = 200;
        res.json(deletedRecord);
    } catch (error) {
        console.log(error)
        res.statusCode = 500;
        res.json({ error: error.message });
    }
};
