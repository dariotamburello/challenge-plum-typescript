import { Router } from 'express'
const router = Router()

import { getOrders, getOrder, createOrder } from "../controllers/orders.controller"

router.route('/')
  .get(getOrders)
  .post(createOrder)
router.route('/:id')
  .get(getOrder)

export default router