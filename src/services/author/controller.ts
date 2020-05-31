import { Author } from './model.ts';
import repository from './repository.ts';
import validator from './validator.ts';
import error from './error.ts';

export default {
    async create(ctx: any) {
        const payload: Author|undefined = await validator.create(ctx);
        if (!payload) {
            return;
        }
        const author: Author = await repository.create(payload);
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: author,
            message: 'success create authors'
        };
    },

    async list(ctx: any) {
        const authors: Array<Author>|any = await repository.list();
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: authors,
            message: 'success list authors'
        };
    },

    async get(ctx: any) {
        const authorId: number = Number(ctx.params.id);
        const author: any = await repository.get(authorId);
        if (!author) {
            error.notFound(ctx, authorId);
            return;
        }
        ctx.response.status = 200;
        ctx.response.body = {
            status: 200,
            data: author,
            message: 'success get authors'
        };
    }
}
