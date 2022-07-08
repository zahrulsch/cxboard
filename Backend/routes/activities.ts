import { Router } from 'express'
import ActivityController from '../controllers/activity'

const router = Router()

router.post('/create', ActivityController.create)
router.get('/list', ActivityController.list)

export default router