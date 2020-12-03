import { Request, Response } from 'express'
import OngRepository from '../repositories/typeorm/OngsRepository'
import CreateOng from '../services/CreateOng'

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
}

export default new OngController
