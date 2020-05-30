const config: any = {
    dev: {
        db: {
            host: Deno.env.get('DB_HOST') || '127.0.0.1',
            port: Deno.env.get('DB_PORT') || 3306,
            user: Deno.env.get('DB_USERNAME') || 'root',
            password: Deno.env.get('DB_PASSWORD') || 'toor',
            name: 'books_dev',
        }
    },
    production: {
        db: {
            host: Deno.env.get('DB_HOST'),
            port: Deno.env.get('DB_PORT'),
            user: Deno.env.get('DB_USERNAME'),
            password: Deno.env.get('DB_PASSWORD'),
            name: 'books_prod'
        }
    }
};

export default config;