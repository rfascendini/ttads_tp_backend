import { Carrera } from './carrera.entity.js';
const carreras = [
    new Carrera(1, 'Ing en Sistemas'),
];
export class CarreraRepository {
    findAll() {
        return carreras;
    }
    findOne(item) {
        return carreras.find((carrera) => carrera.id.toString() === item.id);
    }
    add(item) {
        throw new Error('Method not implemented.');
    }
    update(item) {
        throw new Error('Method not implemented.');
    }
    delete(item) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=carrera.repository.js.map