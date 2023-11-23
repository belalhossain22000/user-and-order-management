import express from 'express'
import { OrderController } from './order.controller'
const router = express.Router()

router.put("/:userId/orders", OrderController.addProductByUserId)

export const OrderRoute = router