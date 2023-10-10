import { Entity, PrimaryGeneratedColumn, Column} from "typeorm"

@Entity("inscripciones")
export class Inscripcion {

  @PrimaryGeneratedColumn() id: number | undefined

  @Column({ type: "varchar" }) alumnonumerodocumento: string | undefined

  @Column({ type: "varchar" }) contactoemail: string | undefined

  @Column({ type: "varchar" }) access_token: string | undefined

  @Column({ type: "int" }) id_carrera: number | undefined

  @Column({ type: "int" }) carrera_preseteada: number | undefined

  @Column({ type: "int" }) anioingreso: number | undefined

  @Column({ type: "varchar" }) lugarcursado: string | undefined

  @Column({ type: "varchar" }) formaingreso: string | undefined

  @Column({ type: "varchar" }) tipocursado: string | undefined

  @Column({ type: "varchar" }) introductoriointensivo: string | undefined

  @Column({ type: "varchar" }) alumnoapellido: string | undefined

  @Column({ type: "varchar" }) alumnonombres: string | undefined

  @Column({ type: "varchar" }) alumnotipodocumento: string | undefined

  @Column({ type: "varchar" }) alumnocuil: string | undefined

  @Column({ type: "varchar" }) alumnosexo: string | undefined

  @Column({ type: "varchar" }) alumnogenero: string | undefined

  @Column({ type: "varchar" }) alumnogenerodet: string | undefined

  @Column({ type: "varchar" }) alumnoestadocivil: string | undefined

  @Column({ type: "varchar" }) nacfechanacimiento: string | undefined

  @Column({ type: "varchar" }) nacnacionalidad: string | undefined

  @Column({ type: "varchar" }) nacvencdni: string | undefined

  @Column({ type: "varchar" }) nacpais: string | undefined

  @Column({ type: "varchar" }) nacprovincia: string | undefined

  @Column({ type: "varchar" }) naclocalidad: string | undefined

  @Column({ type: "varchar" }) nacpartidodepartamento: string | undefined

  @Column({ type: "varchar" }) nacgruposanguineo: string | undefined

  @Column({ type: "varchar" }) domiciliocalle: string | undefined

  @Column({ type: "varchar" }) domicilionumero: string | undefined

  @Column({ type: "varchar" }) domiciliopiso: string | undefined

  @Column({ type: "varchar" }) domiciliolocalidad: string | undefined

  @Column({ type: "varchar" }) domiciliopartido: string | undefined

  @Column({ type: "varchar" }) domicilioprovincia: string | undefined

  @Column({ type: "varchar" }) domiciliocp: string | undefined

  @Column({ type: "varchar" }) contactotelefonofijo: string | undefined

  @Column({ type: "varchar" }) contactotelefonomovil: string | undefined

  @Column({ type: "varchar" }) emergenciacontacto: string | undefined

  @Column({ type: "varchar" }) emergenciatelefono: string | undefined

  @Column({ type: "varchar" }) contactoemailalternativo: string | undefined

  @Column({ type: "varchar" }) secundarioegreso: string | undefined

  @Column({ type: "varchar" }) secundarioestado: string | undefined

  @Column({ type: "varchar" }) secundarioanioegreso: string | undefined

  @Column({ type: "varchar" }) secundariotituladoen: string | undefined

  @Column({ type: "varchar" }) secundariotecnico: string | undefined

  @Column({ type: "varchar" }) secundarioanalitico: string | undefined

  @Column({ type: "varchar" }) secundariocue: string | undefined

  @Column({ type: "varchar" }) secundarioinstitucion: string | undefined

  @Column({ type: "varchar" }) secundarioprovincia: string | undefined

  @Column({ type: "varchar" }) secundariolocalidad: string | undefined

  @Column({ type: "varchar" }) secundariodependede: string | undefined

  @Column({ type: "varchar" }) titulounivnombre: string | undefined

  @Column({ type: "varchar" }) titulouniventramite: string | undefined

  @Column({ type: "varchar" }) titulounivcue: string | undefined

  @Column({ type: "varchar" }) titulounivinstitucion: string | undefined

  @Column({ type: "varchar" }) titulounivanioegreso: string | undefined

  @Column({ type: "varchar" }) titulounivlocalidad: string | undefined

  @Column({ type: "varchar" }) titulounivprovincia: string | undefined

  @Column({ type: "varchar" }) otrosestudiostipo: string | undefined

  @Column({ type: "varchar" }) otrosestudioscarrera: string | undefined

  @Column({ type: "varchar" }) otrosestudiosinstitucion: string | undefined

  @Column({ type: "varchar" }) otrosestudiosmateriasaprobadas: string | undefined

  @Column({ type: "varchar" }) otrosestudiosestado: string | undefined

  @Column({ type: "varchar" }) trabajotrabajas: string | undefined

  @Column({ type: "varchar" }) situacionlaboral: string | undefined

  @Column({ type: "varchar" }) tipotrabajo: string | undefined

  @Column({ type: "varchar" }) trabajoocupacion: string | undefined

  @Column({ type: "varchar" }) tipoocupacion: string | undefined

  @Column({ type: "varchar" }) trabajoenque: string | undefined

  @Column({ type: "varchar" }) trabajohoras: string | undefined

  @Column({ type: "varchar" }) trabajorelcarrera: string | undefined

  @Column({ type: "varchar" }) trabajoempresa: string | undefined

  @Column({ type: "varchar" }) trabajodireccion: string | undefined

  @Column({ type: "varchar" }) trabajotelefono: string | undefined

  @Column({ type: "varchar" }) deporte: string | undefined

  @Column({ type: "varchar" }) tecnotienepc: string | undefined

  @Column({ type: "varchar" }) tecnodondepc: string | undefined

  @Column({ type: "varchar" }) tecnocelular: string | undefined

  @Column({ type: "varchar" }) tecnotieneinternet: string | undefined

  @Column({ type: "varchar" }) tecnointernet: string | undefined

  @Column({ type: "varchar" }) tecnousointernet: string | undefined

  @Column({ type: "varchar" }) hijosacargo: string | undefined

  @Column({ type: "varchar" }) familiaacargo: string | undefined

  @Column({ type: "varchar" }) padreapellido: string | undefined

  @Column({ type: "varchar" }) padrenombre: string | undefined

  @Column({ type: "varchar" }) padrefechanac: string | undefined

  @Column({ type: "varchar" }) padrevive: string | undefined

  @Column({ type: "varchar" }) padreestudios: string | undefined

  @Column({ type: "varchar" }) padretrabajo: string | undefined

  @Column({ type: "varchar" }) padresituacionlaboral: string | undefined

  @Column({ type: "varchar" }) padreobrasocial: string | undefined

  @Column({ type: "varchar" }) madreapellido: string | undefined

  @Column({ type: "varchar" }) madrenombre: string | undefined

  @Column({ type: "varchar" }) madrefechanac: string | undefined

  @Column({ type: "varchar" }) madrevive: string | undefined

  @Column({ type: "varchar" }) madreestudios: string | undefined

  @Column({ type: "varchar" }) madretrabajo: string | undefined

  @Column({ type: "varchar" }) madresituacionlaboral: string | undefined

  @Column({ type: "varchar" }) madreobrasocial: string | undefined

  @Column({ type: "varchar" }) hermanoscantidad: string | undefined

  @Column({ type: "varchar" }) hermanosedades: string | undefined

  @Column({ type: "varchar" }) hermanosactividades: string | undefined

  @Column({ type: "varchar" }) casatipo: string | undefined

  @Column({ type: "varchar" }) casacondicion: string | undefined

  @Column({ type: "varchar" }) casamediotraslado: string | undefined

  @Column({ type: "varchar" }) documentaciondni: string | undefined

  @Column({ type: "varchar" }) documentaciondniback: string | undefined

  @Column({ type: "varchar" }) documentacioncuil: string | undefined

  @Column({ type: "varchar" }) documentacionnacimiento: string | undefined

  @Column({ type: "varchar" }) documentacionanalitico: string | undefined

  @Column({ type: "varchar" }) documentacioncv: string | undefined

  @Column({ type: "varchar" }) documentaciontitulogrado: string | undefined

  @Column({ type: "varchar" }) documentacioncertmaterias: string | undefined

  @Column({ type: "datetime" }) fecha_inicio: Date | undefined

  @Column({ type: "datetime" }) fecha_cierre: Date | undefined

  @Column({ type: "varchar" }) state: string | undefined

  @Column({ type: "text" }) state_messages: string | undefined

  @Column({ type: "varchar" }) legajo_sysacad: string | undefined

  @Column({ type: "text" }) error_sysacad: Text | undefined

  @Column({ type: "datetime" }) fecha_sysacad: Date | undefined

}

