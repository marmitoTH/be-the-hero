import { Router } from 'express'

import OngController from './app/controllers/OngsController'
import IncidentsController from './app/controllers/IncidentsController'

const router = Router()

router.post('/ongs', OngController.createOng)

router.get('/incidents', IncidentsController.indexIncidents)
router.post('/incidents', IncidentsController.createIncident)

export default router
