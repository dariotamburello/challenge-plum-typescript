import { Request, Response } from "express"

import { connect } from "../database"

export async function getOrders(_req:Request, res:Response): Promise<Response> {
    const conn = await connect()
    const posts = await conn.query('SELECT * FROM orders')

    return res.json(posts[0])
}