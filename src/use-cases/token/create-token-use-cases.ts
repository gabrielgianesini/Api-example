import { TokenAdapter } from '../../adapters/token-adapter'
import { UserRepository } from '../../repositories/user-repositories'

interface CreateTokenUserUseCaseRequest{
  username: string
  password: string
}

export class CreateTokenUserUseCase{
  constructor(
    private userRepository: UserRepository,
    private tokenAdapter: TokenAdapter
  ){}

  async verifyUser({ username, password}: CreateTokenUserUseCaseRequest){

    if(!username){
      throw new Error('Username is required')
    }
    if(!password){
      throw new Error('Password is required')
    }
    const existUser = await this.userRepository.verifyExist({ username, password})

    return existUser
  }
  async getToken(generationUser: string ){
    const token = this.tokenAdapter.generationToken({generationUser})
    return token
  }
}