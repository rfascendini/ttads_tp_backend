import { CarreraRepository } from './carrera.repository.js';
const repository = new CarreraRepository();
function findAll(req, res) {
    res.json({ data: repository.findAll() });
}
function findOne(req, res) {
    const id = req.params.id;
    const carrera = repository.findOne({ id });
    if (!carrera) {
        return res.status(404).send({ message: 'Carrera not found' });
    }
    res.json({ data: carrera });
}
export { findAll, findOne };
//# sourceMappingURL=carrera.controler.js.map