import * as mysql from 'mysql2/promise';
export const db_connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ttads_sistemainscripcion',
});
//# sourceMappingURL=db.js.map