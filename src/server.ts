import { log, Application } from '../deps.ts';
import router from './routes.ts';
import appConfig from '../config.ts';
import commonMiddleware from '../middlewares/common.ts';

const app = new Application();
const CONFIG = appConfig[Deno.env.get('DENO_ENV') || 'dev'];
const port: any = CONFIG.server.port;

app.use(commonMiddleware.beforeCall);
app.use(commonMiddleware.afterCall);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(({ response }: { response: any })=> {
  response.status = 404;
  response.body = {
    status: 404,
    message: '404 - endpoint not found',
  };
});

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https://' : 'http://';
  const url = `${protocol}${hostname ?? '127.0.0.1'}:${port}`;
  log.info(`listening on: ${url}`);
});

await app.listen({ port: Number(port) });
