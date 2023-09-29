import {Entity, PrimaryColumn, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity("carreras")
export class Carrera{

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({type: 'varchar', length: 255, nullable: false})
  nombre: string | undefined

}
