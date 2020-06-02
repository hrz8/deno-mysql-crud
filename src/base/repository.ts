import { Dex } from '../../deps.ts';
import { client as dbConn } from '../../database/index.ts';

export class RepoBase<T> {
  private readonly table: string;
  private readonly dex: any;
  private client: any;

  constructor(table: string) {
    this.table = table;
    this.dex = Dex({ client: 'mysql' });
    this._loadClientAsync();
  }

  private async _loadClientAsync() {
    this.client = await dbConn();
  }

  async create(author: T): Promise<T> {
    const query = this.dex.queryBuilder()
      .insert([author])
      .into(this.table)
      .toString();
    const result = await this.client.execute(query);
    return this.get(result.lastInsertId);
  }

  async list(): Promise<Array<T> | Array<any> | undefined> {
    const query = this.dex.queryBuilder()
      .select('*')
      .from(this.table)
      .toString();
    const result = await this.client.execute(query);
    return result.rows;
  }

  async get(id: number | undefined): Promise<T> {
    const query = this.dex.queryBuilder()
      .select()
      .from(this.table)
      .where({ id })
      .toString();
    const result = await this.client.execute(query);
    return result.rows ? result.rows[0] : undefined;
  }

  async update(id: number | undefined, payload: T): Promise<T> {
    const query = this.dex.queryBuilder()
      .from(this.table)
      .update({ ...payload, updated_at: new Date() })
      .where({ id })
      .toString();
    await this.client.execute(query);
    return this.get(id);
  }

  async remove(id: number | undefined): Promise<T> {
    const query = this.dex.queryBuilder()
      .from(this.table)
      .delete()
      .where({ id })
      .toString();
    await this.client.execute(query);
    return this.get(id);
  }
}
