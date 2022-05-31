import { reservationsTable } from './utils/Airtable';

export default async (req, res) => {
    const { id, fields } = req.body;
    try {
        const updatedRecord = await reservationsTable.update([
            { id, fields},
        ]);
        
        res.statusCode = 200;
        res.json(updatedRecord);
    } catch (error) {
        console.log(error)
        res.statusCode = 500;
        res.json({ error: error.message });
    }
};
