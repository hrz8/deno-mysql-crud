import { Client } from 'https://deno.land/x/mysql/mod.ts';
import appConfig from '../config.ts'

const CONFIG = appConfig[Deno.env.get('DENO_ENV') || 'dev'];
export const client = async (db = true) => {
    const config: any = {
        hostname: CONFIG.db.host,
        port: CONFIG.db.port,
        username: CONFIG.db.user,
        password: CONFIG.db.password
    };
    if (db) {
        config.db = CONFIG.db.name;
    }
    return await new Client().connect(config);
};

export const dbname = CONFIG.db.name;
