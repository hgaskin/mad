import { reservationsTable } from './utils/Airtable';

export default async (req, res) => {
    const { Name, EthereumAddress, Phone, Notes, Times } = req.body;
    try {
        const createdRecords = await reservationsTable.create([
            { "fields": { 
                'Name': Name,
                'Ethereum Address': EthereumAddress,
                "Phone": Phone,
                "Notes": Notes,
                "Times": [
                Times
                ]
            }},
        ]);
        const createdRecord = {
            id: createdRecords[0].id,
            fields: createdRecords[0].fields
        }
        res.statusCode = 200;
        res.json(createdRecord);
    } catch (error) {
        console.log(error)
        res.statusCode = 500;
        res.json({ error: error.message });
    }
};
