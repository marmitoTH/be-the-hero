import { Router } from 'express'
import auth from './app/middlewares/auth'

import OngController from './app/controllers/OngsController'
import IncidentsController from './app/controllers/IncidentsController'
import SessionsController from './app/controllers/SessionsController'

const router = Router()

router.post('/sessions', SessionsController.createSession)

router.get('/ongs', auth, OngController.getOng)
router.post('/ongs', OngController.createOng)

router.get('/incidents', IncidentsController.indexIncidents)
router.get('/incidents/ong', auth, IncidentsController.indexOngIncidents)
router.post('/incidents', auth, IncidentsController.createIncident)
router.delete('/incidents', auth, IncidentsController.DeleteIncidents)

export default router
