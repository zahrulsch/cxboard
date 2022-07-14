import { Router } from 'express'
import { auth } from '../helpers/auth'
import UsersController from '../controllers/user'

const router = Router()

router.post('/create', UsersController.createUser)
router.post('/login', UsersController.loginUser)
router.get('/info', auth, UsersController.info)
router.put('/update', auth, UsersController.edit)

export default router