import Incident from '../models/Incident'

interface IIncidentsRepository {
  create(incident: Partial<Incident>): Incident
  index(): Promise<Incident[]>
  save(incident: Incident): Promise<Incident>
}

export default IIncidentsRepository
