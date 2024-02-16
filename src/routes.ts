import { Request, Response, Router } from "express";
import SignupController from "./controller/signup";
import SigninController from "./controller/signin";
import AllController from "./controller/all";

const router = Router()

router.post("/auth/signup", (req: Request, res: Response) => {
  const signupController = new SignupController()
  return signupController.handle(req,res)
})

router.post("/auth/signin", (req: Request, res: Response) => {
  const signinController = new SigninController()
  return signinController.handle(req,res)
})

router.get("/", (req: Request, res: Response) => {
  const allController = new AllController()
  return allController.handle(req,res)
})

export default router