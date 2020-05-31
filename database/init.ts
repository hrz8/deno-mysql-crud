import { Client } from 'https://deno.land/x/mysql/mod.ts';
import config from '../config.ts'

const CONFIG = config[Deno.env.get('DENO_ENV') || 'dev'];
const client: Client = await new Client().connect({
    hostname: CONFIG.db.host,
    port: CONFIG.db.port,
    username: CONFIG.db.user,
    password: CONFIG.db.password
});

// deno run --allow-env --allow-net database/init.ts create
if (Deno.args[0] === 'create') {
    await client.execute(`CREATE DATABASE IF NOT EXISTS ${CONFIG.db.name}`);
    console.log('Database created!');
    await client.close();
}

// deno run --allow-env --allow-net database/init.ts drop
if (Deno.args[0] === 'drop') {
    await client.execute(`DROP DATABASE IF EXISTS ${CONFIG.db.name}`);
    console.log('Database dropped!');
    await client.close();
}
