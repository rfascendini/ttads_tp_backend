import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm"
import { Carrera } from "../carrera/carrera.entity.js"

@Entity("materias")
export class Materia {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({ type:"int"})
  id_carrera: number | undefined

  @Column({ type: "varchar" })
  nombre: string | undefined

  @Column({ type: "varchar" })
  codigo: string | undefined

  @Column({ type: "varchar" })
  plan: string | undefined

  // @ManyToOne(() => Carrera, (carrera) => carrera.materias)
  // idCarrera: Carrera | undefined

}
