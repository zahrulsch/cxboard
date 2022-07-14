import { Router } from 'express'
import UsersController from '../controllers/user'

const router = Router()

router.post('/create', UsersController.createUser)
router.post('/login', UsersController.loginUser)

export default router