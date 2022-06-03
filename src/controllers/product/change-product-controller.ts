

import { Response, Request } from 'express';
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository'
import { ChangeProductUseCase } from '../../use-cases/product/change-product-use-case'



export class ChangeProductController {
  async handle(request: Request , response: Response){
    const { id, name, price } = request.body
    const prismaProductRepository = new PrismaProductRepository()
    const changeProductUseCase = new ChangeProductUseCase(prismaProductRepository)
    try{
      await changeProductUseCase.execute({ id, name, price })
      return response.status(200).send()
    }catch(err) {
      return response.status(400).send(err)
    }
  }
}