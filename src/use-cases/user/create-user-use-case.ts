import { UserRepository } from '../../repositories/user-repositories';

interface CreateUserUseCaseRequest {
  username: string;
  password: string;
}

export class CreateUserUsecase {
  constructor(private userRepository: UserRepository) {}

  async execute({ username, password }: CreateUserUseCaseRequest) {
    if (!username) {
      throw new Error('Username is required');
    }
    if (!password) {
      throw new Error('Password is required');
    }

    await this.userRepository.create({ username, password });
  }
}
