import { Router } from 'express';
import { indexController} from'../controllers/indexControllers';
class IndexRoutes{
   public router: Router = Router();// definimos erutador

   constructor(){
        this.config();

   }

   config():void{
       this.router.get('/',indexController.index);
       this.router.post('/');
   }
} 
 const indexRoutes = new IndexRoutes();
 export default indexRoutes.router;