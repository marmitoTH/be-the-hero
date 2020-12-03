import IIncidentsRepository from '../repositories/IIncidentsRepository'

interface DTO {
  ong_id: string
}

class IndexOngIncidents {
  constructor(
    private repository: IIncidentsRepository
  ) { }

  public async execute(data: DTO) {
    const incidents = await this.repository.findByOngID(data.ong_id)
    return { incidents, total: incidents.length }
  }
}

export default IndexOngIncidents
