import { MongoClient } from 'mongo';

const client = new MongoClient();

await client.connect('mongodb://127.0.0.1:27017/').then(() =>
	console.log('Connected')
);

export { client };
