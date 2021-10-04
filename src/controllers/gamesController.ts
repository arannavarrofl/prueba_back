import {Request, Response} from 'express';
import pool from '../database'; 


class GamesController{
  public async index(req:Request,res:Response){
        console.log("holiii");
        const promisePool = pool.promise();
        const [rows,fields] = await promisePool.query('SELECT * FROM game');
        res.json(rows);
  }

  public async create(req:Request, res: Response){
      const promisePool = pool.promise();
      await promisePool.query('INSERT INTO game set ?',[req.body]);
      res.json({message: "Juego guardado correctamente"})
  }

  public async getById(req:Request,res:Response){
      const {id} = req.params;  //obtener solo una parte de un objeto;
      const promisePool = pool.promise();
      const [rows,fields] = await promisePool.query('SELECT * FROM game WHERE id = ?',[id]);
      const game = JSON.stringify(rows);

      if(game == "[]"){        
        return res.status(404).json({message: "Juego no encontrado"});
      }
      res.json(rows);     
  }

  public async update(req:Request, res: Response){
    try{
      const {id} = req.params;  //obtener solo una parte de un objeto
      const promisePool = pool.promise();
      await promisePool.query('UPDATE game set ? WHERE id = ?',[req.body,id]);
      res.json({text: "Juego eliminado correctamente"})
    } 
    catch(err){
      console.log(err);
    }

  }

  public async delete(req:Request, res: Response){
    const {id} = req.params;  //obtener solo una parte de un objeto
    const promisePool = pool.promise();
    await promisePool.query('DELETE FROM game WHERE id = ?',[id]);
    res.json({text: "Juego eliminado correctamente"})
  }

}

const gamesController = new GamesController();

export default gamesController;