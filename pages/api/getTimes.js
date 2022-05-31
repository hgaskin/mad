import { timesTable } from './utils/Airtable';

export default async (req, res) => {
    try {
        const records = await timesTable.select({}).firstPage()
        res.statusCode = 200;
        res.json(records);
    } catch (error) {
        console.log(error)
        res.statusCode = 500;
        res.json({ error: error.message });
    }
};
