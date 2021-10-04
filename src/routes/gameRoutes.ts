import { Router } from "express";
import gamesController from "../controllers/gamesController";
import gamesRoutes from '../controllers/gamesController';

class GameRoutes{
   public router: Router = Router();// definimos erutador

   constructor(){
        this.config();
   }

   config():void{
       this.router.get('/',gamesController.index);
       this.router.post('/',gamesController.create);
       this.router.get('/:id', gamesController.getById);
       this.router.put('/:id', gamesController.update);
       this.router.delete('/:id', gamesController.delete);
   }
} 
 const gameRoutes = new GameRoutes();
 export default gameRoutes.router;