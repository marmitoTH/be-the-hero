import { Request, Response } from 'express'
import IncidentsRepository from '../repositories/typeorm/IncidentsRepository'
import CreateIncident from '../services/CreateIncident'
import IndexIncidents from '../services/IndexIncidents'

class IncidentsController {
  public async createIncident(request: Request, response: Response) {
    const repository = new IncidentsRepository
    const service = new CreateIncident(repository)
    const { title, description, value } = request.body

    await service.execute({ title, description, value })
      .then(incident => {
        return response.status(201).json(incident)
      })
  }

  public async indexIncidents(_: Request, response: Response) {
    const repository = new IncidentsRepository
    const service = new IndexIncidents(repository)

    await service.execute().then(incidents => {
      return response.status(200).json(incidents)
    })
  }
}

export default new IncidentsController
