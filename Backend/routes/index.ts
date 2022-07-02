import { Router } from 'express'
import { auth } from '../helpers/auth'
import userRouter from './users'
import employeeRouter from './employees'
import schoolRouter from './schools'
import teamRouter from './teams'
import roleRouter from './roles'
import suggestRouter from './suggests'

const router = Router()

router.use('/users', userRouter)
router.use('/employees', auth, employeeRouter)
router.use('/schools', auth, schoolRouter)
router.use('/teams', auth, teamRouter)
router.use('/roles', auth, roleRouter)
router.use('/suggests', auth, suggestRouter)

export default router