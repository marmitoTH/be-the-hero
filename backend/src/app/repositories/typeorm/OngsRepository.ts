import { getRepository } from 'typeorm';
import Ong from '../../models/Ong'
import IOngsRepository from '../IOngsRepository'

class OngRepository implements IOngsRepository {
  public create(ong: Partial<Ong>): Ong {
    const repository = getRepository(Ong)
    return repository.create(ong)
  }

  public async save(ong: Ong): Promise<Ong> {
    const repository = getRepository(Ong)
    return await repository.save(ong)
  }
}

export default OngRepository
