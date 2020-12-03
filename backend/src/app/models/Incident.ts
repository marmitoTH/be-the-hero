import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn
} from "typeorm"

@Entity('incidents')
class Incident {
  @PrimaryColumn()
  id: string

  @Column()
  title: string

  @Column()
  description: string

  @Column()
  value: number

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}

export default Incident
