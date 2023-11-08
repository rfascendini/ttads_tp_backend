
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"

@Entity("carreras")
export class Carrera {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({type: "varchar"})
  nombre: string | undefined

  @Column({type: "int"})
  habilitada: number | undefined

  @Column({type: "int"})
  inscripcionAbierta: number | undefined

  // @OneToMany(() => Materia, (materia) => materia.idCarrera) // note: we will create author property in the Photo class below
  // materias: Materia[] | undefined

}
