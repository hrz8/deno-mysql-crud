interface Publisher {
    id?: number;
    name?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
}

const tableName = 'publishers';

export {
    Publisher,
    tableName
}
