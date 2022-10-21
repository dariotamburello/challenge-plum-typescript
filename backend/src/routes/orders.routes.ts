import { Router } from 'express'
const router = Router()

import { getOrders } from "../controllers/orders.controller"

router.route('/')
  .get(getOrders)

export default router