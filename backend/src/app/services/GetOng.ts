import ServiceError from '../exceptions/ServiceError'
import IOngsRepository from '../repositories/IOngsRepository'

interface DTO {
  id: string
}

class GetOng {
  constructor(
    private repository: IOngsRepository
  ) { }

  public async execute(data: DTO) {
    const ong = await this.repository.findByID(data.id)

    if (!ong) {
      throw new ServiceError('Invalid ID')
    }

    ong.id = ''
    return ong
  }
}

export default GetOng
