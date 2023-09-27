export interface Repository<Clase> {
  getAll(): Promise<Clase[] | undefined>
  get(item: { id: string }): Promise<Clase | undefined>
  add(item: Clase): Promise<Clase | undefined>
  update(item: Clase): Promise<Clase | undefined>
  delete(item: { id: string }): Promise<Clase | undefined>
}