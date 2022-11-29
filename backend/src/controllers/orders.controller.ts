import { Request, Response } from "express"

import { connect } from "../database"

export async function getOrders(_req:Request, res:Response): Promise<Response> {
    const conn = await connect()
    const posts = await conn.query('SELECT * FROM orders')

    return res.json(posts[0])
}

export async function getOrder(req:Request, res:Response): Promise<Response>{
    const conn = await connect()
    const posts = await conn.query('SELECT * FROM `order-item` WHERE `id-order` = ?', [req.params.id])

    return res.json(posts[0])
}

export async function createOrder(req:Request, res:Response) {
    const newOrderTotal: number = req.body.orderTotal
    try {
        const conn = await connect()
        const result = await conn.query('INSERT INTO orders SET total = ?', [newOrderTotal])
        const jsonResult: any = result[0]
        for (let element of req.body.items) {
            try {
                await conn.query('INSERT INTO `order-item` SET `id-order`=?, `pizza`=?, `qty`=?',
                [jsonResult.insertId, element.pizza, element.qty])
            } catch (error) {
                return res.json({
                    message: 'Error adding items to order', error
                })
            }
        }
        return res.json({
            message: 'Order created'
        })
    } catch (error) {
        return res.json({
            message: 'Error creating order', error
        })
    }
}