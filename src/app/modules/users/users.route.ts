import express from 'express'
import { UserController } from './user.controller'
const router = express.Router()

router.post("/", UserController.createUser)
router.get("/", UserController.getAllUsers)
router.get("/:userId", UserController.getUserById)
router.put("/:userId", UserController.updateUserById)
router.delete("/:userId", UserController.deleteUserById)



export const UserRoute = router