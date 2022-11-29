import { createPool } from "mysql2/promise";

export async function connect() {
    const connection = await createPool({
        host: 'db4free.net',
        port: 3306,
        user: 'tamburello_user',
        password: 'Fc.1025A',
        database: 'tamburello_db',
        connectionLimit: 10
    })
    return connection
}