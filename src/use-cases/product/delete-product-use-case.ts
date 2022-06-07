import { ProductRepository } from '../../repositories/product-repositories';

interface DeleteProductUseCaseRequest {
  id: string;
}

export class DeleteProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(request: DeleteProductUseCaseRequest) {
    const { id } = request;

    if (!id) {
      throw new Error('Id is required');
    }

    await this.productRepository.delete({ id });
  }
}
