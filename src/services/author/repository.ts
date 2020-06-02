import { Dex } from '../../../deps.ts'
import { client as dbConn } from '../../../database/index.ts';
import { Author, tableName } from './model.ts';

const dex = Dex({ client: 'mysql' });
const client = await dbConn();

export default {
  async create(author: Author): Promise<Author> {
    const query = dex.queryBuilder()
      .insert([author])
      .into(tableName)
      .toString();
    const result = await client.execute(query);
    return this.get(result.lastInsertId);
  },

  async list(): Promise<Array<Author> | Array<any> | undefined> {
    const query = dex.queryBuilder()
      .select('*')
      .from(tableName)
      .toString();
    const result = await client.execute(query);
    return result.rows;
  },

  async get(id: number | undefined): Promise<Author> {
    const query = dex.queryBuilder()
      .select()
      .from(tableName)
      .where({ id })
      .toString();
    const result = await client.execute(query);
    return result.rows ? result.rows[0] : undefined;
  },

  async update(id: number | undefined, payload: Author): Promise<Author> {
    const query = dex.queryBuilder()
      .from(tableName)
      .update({ ...payload, updated_at: new Date() })
      .where({ id })
      .toString();
    await client.execute(query);
    return this.get(id);
  },

  async remove(id: number | undefined): Promise<Author> {
    const query = dex.queryBuilder()
      .from(tableName)
      .delete()
      .where({ id })
      .toString();
    await client.execute(query);
    return this.get(id);
  },
};
