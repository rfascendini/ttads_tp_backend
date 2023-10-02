<<<<<<< HEAD
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Materia } from "../materia/materia.entity.js"

@Entity("carreras")
export class Carrera {
=======
import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("carreras")
export class Carrera{
>>>>>>> db91eb72b4d96ebb56da4ddb8d9bdfff7f7ca7fa

  @PrimaryGeneratedColumn()
  id: number | undefined

<<<<<<< HEAD
  @Column({type: "varchar", nullable: false})
=======
  @Column({type: 'varchar', length: 255, nullable: false})
>>>>>>> db91eb72b4d96ebb56da4ddb8d9bdfff7f7ca7fa
  nombre: string | undefined

  @Column({type: "int", nullable: false})
  habilitada: number | undefined

  @Column({type: "int", nullable: false})
  inscripcionAbierta: number | undefined

  // @OneToMany(() => Materia, (materia) => materia.idCarrera) // note: we will create author property in the Photo class below
  // materias: Materia[] | undefined

}
