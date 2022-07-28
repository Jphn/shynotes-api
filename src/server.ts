import app from './app.ts';

app.addEventListener(
	'listen',
	() => console.log('> [server.ts] Listening on http://localhost:3030.'),
);

await app.listen({ port: 3030 });
