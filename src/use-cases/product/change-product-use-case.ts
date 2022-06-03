import { ProductRepository } from '../../repositories/product-repositories'

interface ChangeProductUseCaseRequest{
  id: string;
  name: string;
  price: number;
}


export class ChangeProductUseCase {
  constructor(
    private productRepository: ProductRepository
  ){}

  async execute({ id, name, price }: ChangeProductUseCaseRequest){
    

    if(!id){
      throw new Error('Id is required')
    }
    if(!name){
      throw new Error('Name is required')
    }
    if(!price){
      throw new Error('Price is required')
    }

    await this.productRepository.change({id, name, price})
  }

}