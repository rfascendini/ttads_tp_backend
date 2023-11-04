
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"


@Entity("configuracion_parametros")
export class ConfiguracionParametro {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({type: "varchar"})
  field: string | undefined

  @Column({type: "varchar"})
  value: string | undefined

  @Column({type: "varchar"})
  display: string | undefined

  @Column({type: "int"})
  sort_criteria: number | undefined

  @Column({type: "varchar"})
  comment: string | undefined

  @Column({type: "varchar"})
  related_values: string | undefined

  @Column({type: "varchar"})
  related_field: string | undefined

}
