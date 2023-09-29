import { Carrera } from './carrera.entity.js';
import { AppDataSource } from '../services/db.js';
const carreraRepository = AppDataSource.getRepository(Carrera);
export class CarreraRepository {
    async getAll() {
        const carreras = await carreraRepository.find();
        console.log(carreras);
        return carreras;
    }
    async get(item) {
        const carrera = await carreraRepository.findOneBy({ id: parseInt(item.id) });
        return carrera;
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