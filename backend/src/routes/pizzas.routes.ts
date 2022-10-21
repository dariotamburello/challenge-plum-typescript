import { Router } from 'express'
const router = Router()

import { getPizzas } from "../controllers/pizza.controller";

router.route('/')
  .get(getPizzas)

export default router