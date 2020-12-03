import IIncidentsRepository from '../repositories/IIncidentsRepository'

interface DTO {
  id: string
}

class DeleteIncident {
  constructor(
    private repository: IIncidentsRepository
  ) { }

  public async execute(data: DTO) {
    const { id } = data
    return await this.repository.deleteByID(id)
  }
}

export default DeleteIncident
