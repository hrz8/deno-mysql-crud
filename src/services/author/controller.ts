import { Author } from './model.ts';
import repository from './repository.ts';
import validator from './validator.ts';

export default {
    async create(ctx: any) {
        const newAuthor: Author|undefined = await validator.create(ctx);
        if (!newAuthor) {
            return;
        }
        const authorId: number|undefined = await repository.create(newAuthor);
        const author: any = await repository.get(Number(authorId));
        ctx.response.body = author;
    },

    async list(ctx: any) {
        const authors: Array<Author>|any = await repository.list();
        if (!authors) {
            
        }
        ctx.response.body = authors;
    },

    async get(ctx: any) {
        const authorId = ctx.params.id;
        const author: any = await repository.get(Number(authorId));
        if (!author) {

        }
        ctx.response.body = author;
    }
}
