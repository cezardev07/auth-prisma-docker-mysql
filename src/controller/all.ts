import { Request, Response, Router } from "express";
import model from "../model/model";

export default class AllController{
  public async handle(_req: Request, res: Response){
    try{
      const data = await model.user.findMany()
      return res.status(200).json({
        status: 200,
        message: "ok",
        data
      })
    }catch(error){
      return res.json({
        message: "algo deu errado!",
        error
      })
    }
  }
}