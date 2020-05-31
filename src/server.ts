import { Application } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import router from './routes.ts';
import appConfig from '../config.ts'

const app = new Application();
const CONFIG = appConfig[Deno.env.get('DENO_ENV') || 'dev'];
const port: any = CONFIG.server.port;

app.use(router.routes());
app.use(router.allowedMethods());

app.use((ctx: any) => {
    ctx.response.status = 404;
    ctx.response.body = {
        status: 404,
        message: '404 - endpoint not found'
    }
});

app.addEventListener('listen', ({ secure, hostname, port }) => {
    const protocol = secure ? 'https://' : 'http://';
    const url = `${protocol}${hostname ?? '127.0.0.1'}:${port}`;
    console.log(`listening on: ${url}`);
});

await app.listen({ port: Number(port) });
