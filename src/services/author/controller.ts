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
        const newRecord: Author = await repository.create(validatedBody);

        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: newRecord,
            message: 'success create author'
        };
    },

    async list(ctx: any) {
        // - get data from db
        const records: Array<Author>|any = await repository.list();
        
        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: records,
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
        const record: Author|undefined = await repository.get(id);
        if (!record) {
            error.notFound(ctx, id);
            return;
        }

        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: record,
            message: 'success get author'
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
        const record: Author|undefined = await repository.get(id);
        if (!record) {
            error.notFound(ctx, id);
            return;
        }

        // - update data in db
        const updated: Author = await repository.update(id, validatedBody);

        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: updated,
            message: 'success update author'
        };
    },

    async remove(ctx: any) {
        // - get params data
        const params = ctx.params;

        // - validating params data
        const validatedParams: any = validator.remove(ctx, params);
        if (!validatedParams) return;

        // - get data from db
        const { id } = validatedParams;
        const record: Author|undefined = await repository.get(id);
        if (!record) {
            error.notFound(ctx, id);
            return;
        }

        // - delete data from db
        const deleted: Author = await repository.remove(id);

        // - responding the request
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: deleted,
            message: 'success remove author'
        };
    }
}
