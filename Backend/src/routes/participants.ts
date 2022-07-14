import { Router } from 'express'
import ParticipantController from '../controllers/participant'

const router = Router()

router.get('/activities/:id', ParticipantController.listOf)

export default router