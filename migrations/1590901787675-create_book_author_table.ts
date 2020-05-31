// import { Schema } from "https://deno.land/x/nessie@v0.5.0/mod.ts";
import Dex from 'https://deno.land/x/dex@1.0.2/mod.ts';

let dex = Dex({client: 'mysql'});

export const up = (): string => {
    return dex.schema.createTable('books_authors', (table: any) => {
        table.increments();
        table.integer('book_id').notNullable()
            .unsigned();
        table.integer('author_id').notNullable()
            .unsigned();

        table.unique(['book_id', 'author_id'], 'book_author_index');
        
        table.foreign(['book_id']).references('books.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.foreign(['author_id']).references('authors.id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    }).toString();
};

export const down = (): string => {
    return dex.schema.dropTable('books_authors').toString();
};
