import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn
} from 'typeorm'

@Entity('ongs')
class Ong {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  whatsapp: string

  @Column()
  city: string

  @Column()
  uf: string

  @CreateDateColumn()
  readonly created_at: Date

  @CreateDateColumn()
  readonly updated_at: Date
}

export default Ong
