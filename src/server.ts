import app from './app.ts';

app.addEventListener(
	'listen',
	() => console.log('Listening on http://localhost:3030'),
);

await app.listen({ port: 3030 });
