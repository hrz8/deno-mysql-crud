// import { Schema } from "https://deno.land/x/nessie@v0.5.0/mod.ts";
import Dex from "https://deno.land/x/dex@1.0.2/mod.ts";

let dex = Dex({client: 'mysql'});

export const up = (): string => {
    return dex.schema.createTable('authors', (table: any) => {
        table.increments();
        table.string('firstName').notNullable();
        table.string('lastName');
        table.string('email').notNullable();
        table.string('phoneNumber').notNullable();
        table.text('address').notNullable();
        table.timestamps(true, true);
    }).toString();
};

export const down = (): string => {
    return dex.schema.dropTable('authors').toString();
};
