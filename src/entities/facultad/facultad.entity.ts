import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("facultades")
export class Facultad {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({ type: "varchar" })
  nombre: string | undefined

}
