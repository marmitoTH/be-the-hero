import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'

import Ong from './Ong'

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

  @ManyToOne(() => Ong, { eager: true })
  @JoinColumn({ name: 'ong_id' })
  ong: Ong

  @CreateDateColumn()
  created_at: Date

  @CreateDateColumn()
  updated_at: Date
}

export default Incident
