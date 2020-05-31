import { Author } from './model.ts';
import repository from './repository.ts';
import validator from './validator.ts';
import error from './error.ts';

export default {
    async create(ctx: any) {
        // - get body data
        const body = await ctx.request.body();

        // - validating body data
        const validatedBody: Author|undefined = validator.create(ctx, body);
        if (!validatedBody) return;

        // - store data to db
        const author: Author = await repository.create(validatedBody);

        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: author,
            message: 'success create authors'
        };
    },

    async list(ctx: any) {
        // - get data from db
        const authors: Array<Author>|any = await repository.list();
        
        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: authors,
            message: 'success list authors'
        };
    },

    async get(ctx: any) {
        // - get params data
        const params = ctx.params;

        // - validating params data
        const validatedParams: any = validator.get(ctx, params);
        if (!validatedParams) return;

        // - get data from db
        const { id } = validatedParams;
        const author: Author|undefined = await repository.get(id);
        if (!author) {
            error.notFound(ctx, id);
            return;
        }

        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: author,
            message: 'success get authors'
        };
    },

    async update(ctx: any) {
        // - get params data
        const params = ctx.params;
        
        // - get body data
        const body = await ctx.request.body();

        // - validating body data
        const validatedReq: any = validator.update(ctx, params, body);
        if (!validatedReq) return;

        // - get data from db
        const { id, body: validatedBody } = validatedReq;
        const author: Author|undefined = await repository.get(id);
        if (!author) {
            error.notFound(ctx, id);
            return;
        }

        // - update data in db
        const updatedAuthor: Author = await repository.update(id, validatedBody);
        
        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: updatedAuthor,
            message: 'success update authors'
        };
    }
}
