"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const pizza_controller_1 = require("../controllers/pizza.controller");
router.route('/')
    .get(pizza_controller_1.getPizzas)
    .post(pizza_controller_1.createPizza);
exports.default = router;
