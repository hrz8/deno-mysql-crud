import { Schema } from "https://deno.land/x/nessie/mod.ts";

export const up = (schema: Schema): void => {
    schema.create('books', table => {
        table.id(),
        table.string('title', 255).notNullable();
        table.string('description', 255).nullable();
        table.integer('year').notNullable();
    })
};

export const down = (schema: Schema): void => {
    schema.drop('books');
};
