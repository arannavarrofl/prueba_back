import {Request, Response} from 'express';

class IndexController{

  public index (req:Request,res:Response){
       res.json({text:"La API ya va quedando homs"});
  }
}

export const indexController = new IndexController();