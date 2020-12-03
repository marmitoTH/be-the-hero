import IIncidentsRepository from '../repositories/IIncidentsRepository'

class IndexIncidents {
  constructor(
    private repository: IIncidentsRepository
  ) { }

  public async execute() {
    const incidents = await this.repository.index()

    incidents.forEach(incident => {
      incident.ong.id = ''
    })

    return incidents
  }
}

export default IndexIncidents
