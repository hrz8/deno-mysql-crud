import { log, colors } from '../deps.ts';

const X_RESPONSE_TIME: string = 'X-Response-Time';

export default {
  async beforeCall({ response, request }: { response: any, request: any }, next: Function) {
    await next();

    // - before method call function here
    const responseTime = response.headers.get(X_RESPONSE_TIME);
    const method = colors.green(request.method);
    const path = colors.cyan(request.url.pathname);
    const time = colors.red(String(responseTime));
    log.info(`${method} ${path} ${time}`);
  },

  async afterCall({ response }: { response: any }, next: Function) {
    const start = Date.now();
    await next();

    // - after method call function here
    const ms: number = Date.now() - start;
    response.headers.set(X_RESPONSE_TIME, `${ms}ms`)
  },
};