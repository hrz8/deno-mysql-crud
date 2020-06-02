import { ClientMySQL } from './deps.ts';
import config from './config.ts';

// deno run --allow-net --allow-read --allow-write --allow-env https://deno.land/x/nessie@v0.5.0/cli.ts make <name>
const migrationFolder = './migrations';
const CONFIG = config[Deno.env.get('DENO_ENV') || 'dev'];

const clientConfig: any = {
  client: new ClientMySQL(migrationFolder, {
    hostname: CONFIG.db.host,
    port: CONFIG.db.port,
    username: CONFIG.db.user,
    password: CONFIG.db.password,
    db: CONFIG.db.name,
  }),
};

export default clientConfig;
