export interface Repository<Clase> {
  getAll(): Clase[] | undefined
  get(item: { id: string }): Clase | undefined
  add(item: Clase): Clase | undefined
  update(item: Clase): Clase | undefined
  delete(item: { id: string }): Clase | undefined
}