import { Request, Response, Router } from "express";
import model from "../model/model";
import compare from "../bcrypt/compare";

export default class SigninController{
  public async handle(req: Request, res: Response){
    try{
      const {username,password} = req.body
      if(!username || !password){
        return res.status(400)
      }
      const auth : {
        id: string;
        username: string;
        password: string;
      } | null = await model.user.findUnique({
        where:{
          username
        }
      })
      if(!auth){
        return res.status(404).json({
          status: 404,
          message: "Not faund",
        })
      }
      if(!await compare(password, auth.password)){
        return res.status(401).json({
          status: 401,
          message: "Unauthorized",
        })
      }
      return res.status(200).json({
        status: 200,
        message: "ok",
        data: {
          id: auth.id,
          username: auth.username
        }
      })
    }catch(error){
      return res.json({
        message: "algo deu errado!",
        error
      })
    }
  }
}