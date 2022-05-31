const Airtable = require('airtable');
const base = new Airtable({apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}).base('appXYfplhme6NRJO8');

const reservationsTable = base('Reservations')
const timesTable = base('Times')

export { reservationsTable, timesTable } // export both tables so they can be used in other files