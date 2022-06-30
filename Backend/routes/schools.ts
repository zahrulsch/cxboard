import { Router } from 'express';
import Controller from '../controllers/school'

const router = Router()

router.get('/list', Controller.list)

export default router