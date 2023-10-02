import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("entidadeseducativas")
export class EntidadEducativa {

  @PrimaryColumn("int")
  cue: number | undefined

  @Column({ type: "varchar", nullable: true })
  nombre: string | undefined

  @Column({ type: "varchar", nullable: true })
  direccion: string | undefined

  @Column({ type: "varchar", nullable: true })
  facultad: string | undefined

  @Column({ type: "varchar", nullable: true })
  localidad: string | undefined

  @Column({ type: "varchar", nullable: true })
  provincia: string | undefined

  @Column({ type: "varchar", nullable: true })
  pais: string | undefined


}

