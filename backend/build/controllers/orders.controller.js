"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.getOrder = exports.getOrders = void 0;
const database_1 = require("../database");
function getOrders(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM orders');
        return res.json(posts[0]);
    });
}
exports.getOrders = getOrders;
function getOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield (0, database_1.connect)();
        const posts = yield conn.query('SELECT * FROM `order-item` WHERE `id-order` = ?', [req.params.id]);
        return res.json(posts[0]);
    });
}
exports.getOrder = getOrder;
function createOrder(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newOrderTotal = req.body.orderTotal;
        try {
            const conn = yield (0, database_1.connect)();
            const result = yield conn.query('INSERT INTO orders SET total = ?', [newOrderTotal]);
            const jsonResult = result[0];
            for (let element of req.body.items) {
                try {
                    yield conn.query('INSERT INTO `order-item` SET `id-order`=?, `pizza`=?, `qty`=?', [jsonResult.insertId, element.pizza, element.qty]);
                }
                catch (error) {
                    return res.json({
                        message: 'Error adding items to order', error
                    });
                }
            }
            return res.json({
                message: 'Order created'
            });
        }
        catch (error) {
            return res.json({
                message: 'Error creating order', error
            });
        }
    });
}
exports.createOrder = createOrder;
