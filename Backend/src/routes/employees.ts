import { Router } from 'express'
import EmployeeController from '../controllers/employee'
const router = Router()

router.post('/create', EmployeeController.create)
router.get('/list', EmployeeController.list)
router.put('/:id', EmployeeController.edit)
router.delete('/:id', EmployeeController.delete)
router.get('/:id', EmployeeController.getOne)

export default router