import Dex from "https://deno.land/x/dex@1.0.2/mod.ts";
import { client as dbConn } from '../../../database/index.ts';
import { Author, tableName } from './model.ts';

const dex = Dex({client: 'mysql'});
const client = await dbConn();

export default {
    async create(author: Author) {
        const query = dex.queryBuilder()
            .insert([author])
            .into(tableName)
            .toString();
        const newData = await client.execute(query);
        return newData.lastInsertId;
    },

    async list() {
        const query = dex.queryBuilder()
            .select('*')
            .from(tableName)
            .toString();
        const { rows } = await client.execute(query);
        return rows || undefined;
    },

    async get(id: number) {
        const query = dex.queryBuilder()
            .select()
            .from(tableName)
            .where({ id })
            .toString();
        const { rows } = await client.execute(query);
        return rows ? rows[0] : undefined;
    }
}
