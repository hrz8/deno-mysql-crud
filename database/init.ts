import { client as conn, dbname } from './index.ts';

const client = await conn(false);
// deno run --allow-env --allow-net database/init.ts create
if (Deno.args[0] === 'create') {
    await client.execute(`CREATE DATABASE IF NOT EXISTS ${dbname}`);
    console.log('Database created!');
    await client.close();
}

// deno run --allow-env --allow-net database/init.ts drop
if (Deno.args[0] === 'drop') {
    await client.execute(`DROP DATABASE IF EXISTS ${dbname}`);
    console.log('Database dropped!');
    await client.close();
}
