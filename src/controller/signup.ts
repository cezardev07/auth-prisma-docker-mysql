import { Request, Response, Router } from "express";
import model from "../model/model";
import hash from "../bcrypt/hash";

export default class SignupController{
  public async handle(req: Request, res: Response){
    try {
      const {username,password} = req.body
      if(!username || !password){
        return res.status(400)
      }
      const bcryptHash = await hash(password)
      const newUser = await model.user.create({
        data: {
          username,
          password: bcryptHash
        }
      })
      return res.status(200).json({
        status: 200,
        message: "ok",
        data: newUser
      })
    } catch (error) {
      return res.json({
        message: "algo deu errado!",
        error
      })
    }
  }
}