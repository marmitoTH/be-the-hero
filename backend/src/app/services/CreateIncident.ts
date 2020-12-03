import { v4 as uuidv4 } from 'uuid'
import Incident from '../models/Incident'
import IOngsRepository from '../repositories/IOngsRepository'
import IIncidentsRepository from '../repositories/IIncidentsRepository'
import ServiceError from '../exceptions/ServiceError'

interface DTO {
  ong_id: string
  title: string
  description: string
  value: number
}

class CreateIncident {
  constructor(
    private incidentsRepository: IIncidentsRepository,
    private ongsRepository: IOngsRepository
  ) { }

  public async execute(data: DTO): Promise<Incident> {
    const { ong_id, title, description, value } = data
    const ong = await this.ongsRepository.findByID(ong_id)
    const id = uuidv4()

    if (!ong) {
      throw new ServiceError('Invalid ong ID')
    }

    const incident = this.incidentsRepository.create({
      id,
      title,
      description,
      value,
      ong
    })

    await this.incidentsRepository.save(incident)

    return incident
  }
}

export default CreateIncident
