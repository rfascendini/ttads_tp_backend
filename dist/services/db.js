import "reflect-metadata";
import { DataSource } from 'typeorm';
import { Carrera } from '../carrera/carrera.entity.js';
// import { EntidadEducativa } from '../entidadesEducativas/entidadEducativa.entity'
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "ttads_sistemainscripcion",
    entities: [Carrera],
    synchronize: true,
    logging: true
});
AppDataSource.initialize()
    .then(() => {
    console.log("Conexion a DB exitosa!");
})
    .catch((error) => console.log(error));
//# sourceMappingURL=db.js.map