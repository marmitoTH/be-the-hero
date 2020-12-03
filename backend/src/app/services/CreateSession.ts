import ServiceError from '../exceptions/ServiceError'
import IOngsRepository from '../repositories/IOngsRepository'
import jwt from 'jsonwebtoken'
import auth from '../../config/auth'

interface DTO {
  id: string
}

class CreateSession {
  constructor(
    private repository: IOngsRepository
  ) { }

  public async execute(data: DTO) {
    const { id } = data
    const ong = await this.repository.findByID(id)

    if (!ong) {
      throw new ServiceError('Invalid ID')
    }

    const token = jwt.sign({}, auth.jwt.secret, {
      subject: ong.id,
      expiresIn: auth.jwt.expiresIn,
    })

    return { ong, token }
  }
}

export default CreateSession
