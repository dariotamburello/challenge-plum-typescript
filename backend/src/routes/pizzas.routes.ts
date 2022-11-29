import { Router } from 'express'
const router = Router()

import { getPizzas, createPizza } from "../controllers/pizza.controller";

router.route('/')
  .get(getPizzas)
  .post(createPizza)

export default router