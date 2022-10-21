import { createPool } from "mysql2/promise";

export async function connect() {
    const connection = await createPool({
        host: '192.168.120.17',
        port: 3306,
        user: 'user2',
        password: 'Fc.1025A',
        database: 'test',
        connectionLimit: 10
    })
    return connection
}