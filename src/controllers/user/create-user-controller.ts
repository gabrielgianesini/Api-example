import { Response, Request } from "express";
import { PrismaUserRepository } from "../../repositories/prisma/prisma-user-repository";
import { CreateUserUsecase } from "../../use-cases/user/create-user-use-case";



export class CreateUserController {
  async handle(request: Request, response: Response){
    const { username, password } = request.body
    const prismaUserRepository = new PrismaUserRepository()
    const createUserUsecase = new CreateUserUsecase(prismaUserRepository)

    try {
      await createUserUsecase.execute({username, password})
      return response.status(200).send()
    } catch (err){
      return response.status(400).send('User already exist')
    }
  }
}