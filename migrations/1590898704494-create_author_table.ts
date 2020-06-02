// import { Schema } from 'https://deno.land/x/nessie@v0.5.0/mod.ts';
import { Dex } from '../deps.ts';

let dex = Dex({ client: 'mysql' });

export const up = (): string => {
  return dex.schema.createTable('authors', (table: any) => {
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('email').notNullable();
    table.string('phone_number').notNullable();
    table.text('address').notNullable();
    table.timestamps(true, true);
  }).toString();
};

export const down = (): string => {
  return dex.schema.dropTable('authors').toString();
};
