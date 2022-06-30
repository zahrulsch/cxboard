import { Router } from 'express'
import TeamController from '../controllers/team'

const router = Router()

router.post('/create', TeamController.create)
router.get('/list', TeamController.list)
router.get('/:id', TeamController.detail)

export default router