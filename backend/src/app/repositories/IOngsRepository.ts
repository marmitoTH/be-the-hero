import Ong from '../models/Ong'

interface IOngsRepository {
  create(ong: Partial<Ong>): Ong
  save(ong: Ong): Promise<Ong>
}

export default IOngsRepository
