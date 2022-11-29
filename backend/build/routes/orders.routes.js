"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const orders_controller_1 = require("../controllers/orders.controller");
router.route('/')
    .get(orders_controller_1.getOrders)
    .post(orders_controller_1.createOrder);
router.route('/:id')
    .get(orders_controller_1.getOrder);
exports.default = router;
