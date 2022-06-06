
import { Response, Request } from 'express';
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository'
import { DeleteProductUseCase } from '../../use-cases/product/delete-product-use-case';




export class DeleteProductController {
  async handle(request: Request , response: Response){
    const { id } = request.body
    const prismaProductRepository = new PrismaProductRepository()
    const deleteProductUseCase = new DeleteProductUseCase(prismaProductRepository)
    try{
      const DeleteProduct = await deleteProductUseCase.execute({ id })
      return response.status(201).send()
    }catch(err) {
      return response.status(400).send(err)
    }
  }
}