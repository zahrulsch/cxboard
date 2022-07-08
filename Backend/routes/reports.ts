import { Router } from 'express'
import ReportController from '../controllers/report'
const router = Router()

router.get('/:sheetId', ReportController.get)

export default router