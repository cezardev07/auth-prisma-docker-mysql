import bcrypt from "bcrypt";

async function encrypt(password: string): Promise<string>{
  const saltRounds: number = 10;  
  const hashPassword: string = await bcrypt.hash(password, saltRounds)

  return hashPassword
}

export default encrypt