import crypto from 'crypto'
import IOngsRepository from '../repositories/IOngsRepository'

interface DTO {
  name: string
  email: string
  whatsapp: string
  city: string
  uf: string
}

class CreateOng {
  constructor(
    private repository: IOngsRepository
  ) { }

  public async execute(data: DTO) {
    const { name, email, whatsapp, city, uf } = data
    const id = crypto.randomBytes(4).toString('hex')

    const ong = this.repository.create({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    //await repository.save(ong)

    return ong
  }
}

export default CreateOng
