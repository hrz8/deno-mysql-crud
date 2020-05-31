interface Author {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    address?: string;
}

const tableName = 'authors';

export {
    Author,
    tableName
}