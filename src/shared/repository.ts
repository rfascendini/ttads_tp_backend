export interface Repository<Clase> {
  findAll(): Clase[] | undefined
  findOne(item: { id: string }): Clase | undefined
  add(item: Clase): Clase | undefined
  update(item: Clase): Clase | undefined
  delete(item: { id: string }): Clase | undefined
}