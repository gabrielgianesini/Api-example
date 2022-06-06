
import { Response, Request } from 'express';
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository'
import { CreateProductUseCase } from '../../use-cases/product/create-product-use-case';




export class CreateProductController {
  async handle(request: Request , response: Response){
    const { name, price } = request.body
    const prismaProductRepository = new PrismaProductRepository()
    const craeteProductUseCase = new CreateProductUseCase(prismaProductRepository)
    try{
      const createProduct = await craeteProductUseCase.execute({ name, price })
      return response.status(200).send(createProduct)
    }catch(err) {
      return response.status(400).send(err)
    }
  }
}