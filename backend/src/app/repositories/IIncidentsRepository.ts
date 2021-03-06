import Incident from '../models/Incident'

interface IIncidentsRepository {
  create(incident: Partial<Incident>): Incident
  index(): Promise<Incident[]>
  findByID(id: string): Promise<Incident | undefined>
  findByOngID(id: string): Promise<Incident[]>
  deleteByID(id: string): Promise<boolean>
  save(incident: Incident): Promise<Incident>
}

export default IIncidentsRepository
