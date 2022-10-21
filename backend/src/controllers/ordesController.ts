import { Request, Response } from "express"

import { connect } from "../database"
//import { OrderEntry } from "../interfaces/Order.interface";

export async function getOrders(_req:Request, res:Response): Promise<Response> {
    const conn = await connect()
    const posts = await conn.query('SELECT * FROM orders')

    return res.json(posts[0])
}

export async function createOrder(req:Request, res:Response) {
    const newOrderTotal: number = req.body.orderTotal
    const conn = await connect()
    await conn.query('INSERT INTO order SET total ?', [newOrderTotal])
    

    return res.json({
        message: 'Order created'
    })
}