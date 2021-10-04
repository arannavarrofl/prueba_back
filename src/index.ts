import express,{Application} from 'express';
import indexRoutes from './routes/indexRoutes';
import gameRoutes from './routes/gameRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{
public app: Application; //aqui guardamos el objeto que arroja "express"

    constructor(){
        this.app = express();//inicializamos express
        this.config();
        this.routes();
    }

    config():void{ //este método no regresa nada, solo se configura el servidor
        this.app.set('port',process.env.PORT|| 3000);// Sí hay yun puerto definido, tomarlo o sino asignar el 3000
        this.app.use(morgan('dev'));//verificar las peticiones al servidor
        this.app.use(cors());//angular podrá pedir datos al server
        this.app.use(express.json());//recibir json desde la vista
        this.app.use(express.urlencoded({extended:false})); // en caso de que queramos enviar desde un formulario html
    }
    routes():void{ //aqui configuramos las rutas de la apicación
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gameRoutes);
    }

    start(){//para inciar el servidor
        this.app.listen(this.app.get('port'),()=>{
            console.log("Server on port: "+this.app.get('port'));
        });
    }
}

const server = new Server();//creamos objeto de Server y lo asignamos a la const server para ejecutar la clase
server.start();