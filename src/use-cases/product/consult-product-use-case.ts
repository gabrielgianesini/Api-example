import { ProductRepository } from '../../repositories/product-repositories'

interface ConsultProductUseCaseRequest{
  name: string;
}

export class ConsultProductUseCase {
  constructor(
    private productRepository: ProductRepository
  ){}

  async execute(request: ConsultProductUseCaseRequest){
    const { name } = request

    if(!name){
      throw new Error('Name is required')
    }

    const product = await this.productRepository.consult({name})
    
    return product
  }
}