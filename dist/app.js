import express from 'express';
import cors from 'cors';
import { carreraRouter } from './carrera/carrera.routes.js';
// import { entidadEducativaRouter } from './entidadesEducativas/entidadEducativa.routes.js'
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/carreras', carreraRouter);
// app.use('/api/entidadesEducativas', entidadEducativaRouter)
app.use((_, res) => {
    return res.status(404).send({ message: 'Resource not found' });
});
app.listen(3000, () => {
    console.log('Server runnning on http://localhost:3000/');
});
//# sourceMappingURL=app.js.map