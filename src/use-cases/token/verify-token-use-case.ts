import { TokenAdapter } from "../../adapters/token-adapter";

interface VerifyTokenUseCaseRequest{
  authToken: string;
}

export class VerifyTokenUseCase {
  constructor(
    private tokenAdapter: TokenAdapter
  ){}

  async verifyToken({authToken}: VerifyTokenUseCaseRequest){
    const result = await this.tokenAdapter.verifyToken({authToken})
    return result
  }
}