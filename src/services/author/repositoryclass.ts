import { Author, tableName } from './model.ts';
import { RepoBase } from '../../base/repository.ts';

export class Repo extends RepoBase<Author> {
    constructor() {
        super(tableName);
    }
}
