"use strict";
/*import  mysql  from 'promise-mysql';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection().then(connection =>{
    pool.releaseConnection()
});*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = __importDefault(require("mysql2"));
const keys_1 = __importDefault(require("./keys"));
const pool = mysql2_1.default.createPool(keys_1.default.database);
pool.getConnection(function (err, conn) {
    console.log('Base de datos conectada correctamente');
    // Connection is automatically released when query resolves
});
exports.default = pool;
