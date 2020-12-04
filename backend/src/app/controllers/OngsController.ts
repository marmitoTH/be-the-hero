import { Request, Response } from 'express'
import OngRepository from '../repositories/typeorm/OngsRepository'
import CreateOng from '../services/CreateOng'
import GetOng from '../services/GetOng'

class OngController {
  public async createOng(request: Request, response: Response) {
    const repository = new OngRepository
    const service = new CreateOng(repository)
    const { name, email, whatsapp, city, uf } = request.body

    await service.execute({ name, email, whatsapp, city, uf })
      .then(ong => {
        return response.status(201).json(ong)
      })
  }

  public async getOng(request: Request, response: Response) {
    const repository = new OngRepository
    const service = new GetOng(repository)
    const id = request.user.id

    await service.execute({ id }).then(ong => {
      return response.status(200).json(ong)
    }).catch(error => {
      return response.status(error.code).json(error)
    })
  }
}

export default new OngController
