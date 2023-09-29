import { CarreraRepository } from './entidadEducativa.repository.js';
const repository = new CarreraRepository();
function getAll(req, res) {
    repository.getAll().then((data) => res.json(data));
}
function get(req, res) {
    const id = req.params.id;
    repository.get({ id }).then((data) => res.json(data));
}
export { getAll, get };
//# sourceMappingURL=entidadEducativa.controler.js.map