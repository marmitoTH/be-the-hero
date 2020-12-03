import Incident from '../models/Incident'
import IIncidentsRepository from '../repositories/IIncidentsRepository'
import { v4 as uuidv4 } from 'uuid'

interface DTO {
  title: string
  description: string
  value: number
}

class CreateIncident {
  constructor(
    private repository: IIncidentsRepository
  ) { }

  public async execute(data: DTO): Promise<Incident> {
    const id = uuidv4()
    const { title, description, value } = data
    const incident = this.repository.create({
      id,
      title,
      description,
      value
    })

    //await this.repository.save(incident)
    return incident
  }
}

export default CreateIncident
