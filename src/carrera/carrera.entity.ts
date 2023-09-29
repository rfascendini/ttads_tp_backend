import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Carrera {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  nombre: string | undefined

}
