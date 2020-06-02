// import { Schema } from 'https://deno.land/x/nessie@v0.5.0/mod.ts';
import { Dex } from '../deps.ts';

let dex = Dex({ client: 'mysql' });

export const up = (): string => {
  return dex.schema.createTable('books', (table: any) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description');
    table.integer('year').notNullable();
    table.float('price').notNullable();
    table.integer('publisher_id').unsigned();
    table.timestamps(true, true);

    table.foreign(['publisher_id']).references('publishers.id')
      .onDelete('SET NULL');
  }).toString();
};

export const down = (): string => {
  return dex.schema.dropTable('books').toString();
};
