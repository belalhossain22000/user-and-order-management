import express from 'express'
import { OrderController } from './order.controller'
const router = express.Router()

router.get("/:userId/orders", OrderController.getOrderByUserId)
router.get("/:userId/orders/total-price", OrderController.getTotalPriceByUserId)
router.put("/:userId/orders", OrderController.addProductByUserId)

export const OrderRoute = router