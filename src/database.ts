import { MongoClient } from 'mongo';

const client = new MongoClient();

await client.connect(Deno.env.get('MONGO_URL') ?? 'mongodb://127.0.0.1:27017/')
	.then(() => console.log('> [database.ts] Successfully connected...'));

export { client };
