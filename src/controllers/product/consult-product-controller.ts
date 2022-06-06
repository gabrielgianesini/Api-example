
import { Response, Request } from 'express';
import { PrismaProductRepository } from '../../repositories/prisma/prisma-product-repository'
import { ConsultProductUseCase } from '../../use-cases/product/consult-product-use-case';




export class ConsultProductController {
  async handle(request: Request , response: Response){
    const { name } = request.params
    const prismaProductRepository = new PrismaProductRepository()
    const consultProductUseCase = new ConsultProductUseCase(prismaProductRepository)
    try{
      const ConsultProduct = await consultProductUseCase.execute({ name } as {name: string})
      if(ConsultProduct.length) return response.status(200).send(ConsultProduct)
      return response.status(204).send(ConsultProduct)
    }catch(err) {
      return response.status(400).send(err)
    }
  }
}