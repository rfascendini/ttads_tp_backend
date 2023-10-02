import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("usuarios")
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({ type: "varchar" })
  nombre: string | undefined

  @Column({ type: "varchar" }) 
  apellido: string | undefined

  @Column({ type: "varchar" }) 
  userName: string | undefined

  @Column({ type: "varchar" }) 
  password: string | undefined

  @Column({ type: "varchar" }) 
  rol: string | undefined

  @Column({ type: "int" }) 
  add_user: number | undefined

  @Column({ type: "datetime" }) 
  add_date: Date | undefined

  @Column({ type: "int" }) 
  edit_user: number | undefined

  @Column({ type: "datetime" }) 
  edit_date: Date | undefined

  @Column({ type: "int" }) 
  kill_user: number | undefined

  @Column({ type: "datetime" }) 
  kill_date: Date | undefined
  
  @Column({ type: "int" }) 
  eliminado: number | undefined

}
