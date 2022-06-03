import { PrismaClient } from "@prisma/client";
import { UserData, UserRepository } from '../user-repositories'
import md5 from 'md5';

const prisma = new PrismaClient({log:['query']})

export class PrismaUserRepository implements UserRepository {
  async create({ username, password}: UserData){
    await prisma.user.create({
      data: { username, password: md5(password) }
    })
  }
  async verifyExist({ username, password}: UserData){
    const user = await prisma.user.findFirst({
      where: {username, password: md5(password)}
    })
    return user ? true : false
  }
}