import { Router } from 'express'
import { auth } from '../helpers/auth'
import userRouter from './users'
import employeeRouter from './employees'

const router = Router()

router.use('/users', userRouter)
router.use('/employees', auth, employeeRouter)

export default router