"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gameRoutes_1 = __importDefault(require("./routes/gameRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //inicializamos express
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); // Sí hay yun puerto definido, tomarlo o sino asignar el 3000
        this.app.use((0, morgan_1.default)('dev')); //verificar las peticiones al servidor
        this.app.use((0, cors_1.default)()); //angular podrá pedir datos al server
        this.app.use(express_1.default.json()); //recibir json desde la vista
        this.app.use(express_1.default.urlencoded({ extended: false })); // en caso de que queramos enviar desde un formulario html
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gameRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server on port: " + this.app.get('port'));
        });
    }
}
const server = new Server(); //creamos objeto de Server y lo asignamos a la const server para ejecutar la clase
server.start();
