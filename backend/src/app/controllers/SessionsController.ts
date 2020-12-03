import { Request, Response } from 'express'
import OngRepository from '../repositories/typeorm/OngsRepository'
import CreateSession from '../services/CreateSession'

class SessionsController {
  public async createSession(request: Request, response: Response) {
    const repository = new OngRepository
    const service = new CreateSession(repository)
    const { id } = request.body

    await service.execute({ id }).then(session => {
      return response.status(201).json(session)
    }).catch(error => {
      return response.status(error.code).json(error)
    })
  }
}

export default new SessionsController
