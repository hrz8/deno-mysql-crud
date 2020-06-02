// import { Schema } from 'https://deno.land/x/nessie@v0.5.0/mod.ts';
import { Dex } from '../deps.ts';

let dex = Dex({ client: 'mysql' });

export const up = (): string => {
  return dex.schema.createTable('publishers', (table: any) => {
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('phone_number').notNullable();
    table.text('address').notNullable();
    table.timestamps(true, true);
  }).toString();
};

export const down = (): string => {
  return dex.schema.dropTable('publishers').toString();
};
