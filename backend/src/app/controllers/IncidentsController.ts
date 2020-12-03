import { Request, Response } from 'express'
import IncidentsRepository from '../repositories/typeorm/IncidentsRepository'
import CreateIncident from '../services/CreateIncident'
import IndexIncidents from '../services/IndexIncidents'
import DeleteIncident from '../services/DeleteIncident'

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

  public async DeleteIncidents(request: Request, response: Response) {
    const repository = new IncidentsRepository
    const service = new DeleteIncident(repository)
    const id = request.params.id

    await service.execute({ id }).then(removed => {
      if (removed) {
        return response.status(200).json()
      }

      return response.status(404).json()
    })
  }
}

export default new IncidentsController
