import { ProductRepository } from '../../repositories/product-repositories';

interface CreateProductUseCaseRequest {
  name: string;
  price: number;
}

export class CreateProductUseCase {
  constructor(private ProductRepository: ProductRepository) {}

  async execute(request: CreateProductUseCaseRequest) {
    const { name, price } = request;

    if (!name) {
      throw new Error('Product is required');
    }
    if (!price) {
      throw new Error('Price is required');
    }

    const product = await this.ProductRepository.create({ name, price });

    return product;
  }
}
