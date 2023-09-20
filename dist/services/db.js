import mysql from 'mysql';
export const db_connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ttads_sistemainscripcion'
});
db_connection.connect(function (err) {
    if (err) {
        console.error('Error de Conexión: ' + err.stack);
        return;
    }
    console.log("Conexión exitosa!");
});
//# sourceMappingURL=db.js.map