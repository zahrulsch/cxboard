import { Router } from 'express'
import RoleController from '../controllers/role'
const router = Router()

router.post('/create', RoleController.create)
router.get('/list', RoleController.list)

export default router