import { CarreraRepository } from './entidadEducativa.repository.js';
const repository = new CarreraRepository();
function getAll(req, res) {
    res.json({ data: repository.getAll() });
}
function get(req, res) {
    const id = req.params.id;
    const entidadEducativa = repository.get({ id });
    if (!entidadEducativa) {
        return res.status(404).send({ message: 'EntidadEducativa not found' });
    }
    res.json({ data: entidadEducativa });
}
export { getAll, get };
//# sourceMappingURL=entidadEducativa.controler.js.map