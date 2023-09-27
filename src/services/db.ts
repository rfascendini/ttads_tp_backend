import mysql2 from 'mysql2'

export const db_connection = mysql2.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ttads_sistemainscripcion',
}).promise();