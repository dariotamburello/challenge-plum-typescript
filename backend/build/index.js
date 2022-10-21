"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//const routes_pizzas = require('./routes/routes-pizzas')
//const routes_orders = require('./routes/routes-orders')
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 4000);
app.use(express_1.default.json());
app.get('/', (_req, res) => {
    res.json({ "Title": "Welcome to api Pizzas" });
});
//app.use('/api/pizzas', routes_pizzas)
//app.use('/api/orders', routes_orders)
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});
