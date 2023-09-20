import { CarreraRepository } from './carrera.repository.js';
const repository = new CarreraRepository();
function getAll(req, res) {
    res.json({ data: repository.getAll() });
}
function get(req, res) {
    const id = req.params.id;
    const carrera = repository.get({ id });
    if (!carrera) {
        return res.status(404).send({ message: 'Carrera not found' });
    }
    res.json({ data: carrera });
}
export { getAll, get };
//# sourceMappingURL=carrera.controler.js.map