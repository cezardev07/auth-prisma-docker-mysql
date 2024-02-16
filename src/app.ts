import express, {Express} from "express";
import cors from "cors";
import router from "./routes";

export default class AppController{
  public app: Express;
  constructor(){
    this.app = express()
    this.middlewares()
    this.routes()
  }

  private middlewares(): void{
    this.app.use(cors())
    this.app.use(express.json())
  }

  private routes(): void{
    this.app.use("/",router)
  }
}