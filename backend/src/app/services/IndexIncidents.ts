import IIncidentsRepository from '../repositories/IIncidentsRepository'

class IndexIncidents {
  constructor(
    private repository: IIncidentsRepository
  ) { }

  public async execute() {
    return await this.repository.index()
  }
}

export default IndexIncidents
