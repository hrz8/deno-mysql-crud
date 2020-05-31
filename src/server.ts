import { Application } from "https://deno.land/x/oak@v5.0.0/mod.ts";
import router from './routes.ts';

const app = new Application();
const port: any = Deno.env.get('DENO_PORT') || 6790;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port: Number(port) });
