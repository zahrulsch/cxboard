import { Router } from 'express'
import SuggestController from '../controllers/suggest'
const router = Router()

router.get('/employee/:id', SuggestController.employee)

export default router