import config from './config.ts'

const CONFIG = config[Deno.env.get('DENO_ENV') || 'dev'];
const configMySql = {
  migrationFolder: `./migrations`,
  connection: {
    hostname: CONFIG.db.host,
    port: CONFIG.db.port,
    username: CONFIG.db.user,
    password: CONFIG.db.password,
    db: CONFIG.db.name,
  },
  dialect: "mysql",
};

export default configMySql;
