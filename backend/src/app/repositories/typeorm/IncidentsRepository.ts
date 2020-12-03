import { getRepository } from 'typeorm';
import Incident from '../../models/Incident';
import IIncidentsRepository from '../IIncidentsRepository'

class IncidentsRepository implements IIncidentsRepository {
  public create(incident: Partial<Incident>): Incident {
    const repository = getRepository(Incident)
    return repository.create(incident)
  }

  public async index(): Promise<Incident[]> {
    const repository = getRepository(Incident)
    return await repository.find()
  }

  public async findByID(id: string): Promise<Incident | undefined> {
    const repository = getRepository(Incident)
    return await repository.findOne({ where: { id } })
  }

  public async deleteByID(id: string) {
    const repository = getRepository(Incident)
    const incident = await this.findByID(id)

    if (incident) {
      await repository.remove(incident)
      return true
    }

    return false
  }

  public async save(incident: Incident): Promise<Incident> {
    const repository = getRepository(Incident)
    return await repository.save(incident)
  }
}

export default IncidentsRepository
