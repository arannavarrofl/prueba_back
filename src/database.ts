/*import  mysql  from 'promise-mysql';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection().then(connection =>{
    pool.releaseConnection()
});*/

import mysql from 'mysql2';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection(function(err,conn){
    console.log('Base de datos conectada correctamente')
// Connection is automatically released when query resolves
});

export default pool;