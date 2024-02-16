import bcrypt from "bcrypt";

async function compare (comparePassword: string, hash: string): Promise<boolean>{
  const decrypted: boolean = await bcrypt.compare(comparePassword, hash)

  return decrypted
}

export default compare