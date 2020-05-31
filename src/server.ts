import { Application } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import router from './routes.ts';
import appConfig from '../config.ts'

const app = new Application();
const CONFIG = appConfig[Deno.env.get('DENO_ENV') || 'dev'];
const port: any = CONFIG.server.port;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port: Number(port) });
