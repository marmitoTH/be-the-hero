import { Router } from 'express'
import auth from './app/middlewares/auth'

import OngController from './app/controllers/OngsController'
import IncidentsController from './app/controllers/IncidentsController'
import SessionsController from './app/controllers/SessionsController'

const router = Router()

router.post('/sessions', SessionsController.createSession)

router.post('/ongs', OngController.createOng)

router.get('/incidents', IncidentsController.indexIncidents)
router.post('/incidents', auth, IncidentsController.createIncident)
router.delete('/incidents/:id', auth, IncidentsController.DeleteIncidents)

export default router
