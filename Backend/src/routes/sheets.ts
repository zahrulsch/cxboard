import { Router } from 'express'
import SheetController from '../controllers/sheet'

const router = Router()

router.get('/test/:id', SheetController.getTest)

export default router