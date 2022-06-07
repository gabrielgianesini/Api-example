import { Response, Request } from 'express';
import { JwtTokenAdapter } from '../../adapters/jwt/jwt-token-adapter';
import { PrismaUserRepository } from '../../repositories/prisma/prisma-user-repository';
import { CreateTokenUserUseCase } from '../../use-cases/token/create-token-use-cases';

interface TokenUserControllerRequest {
  username: string;
  password: string;
}

export class TokenUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const prismaUserRepository = new PrismaUserRepository();
    const jwtTokenAdapter = new JwtTokenAdapter();
    const createTokenUserUseCase = new CreateTokenUserUseCase(
      prismaUserRepository,
      jwtTokenAdapter,
    );

    try {
      const result = await createTokenUserUseCase.verifyUser({
        username,
        password,
      });
      if (result) {
        const token = await createTokenUserUseCase.getToken(username);
        return response.status(200).send({ token: token });
      }
      return response.status(401).send('User or password invalid');
    } catch {
      return response.status(400).send('Check the parameters sent');
    }
  }
}
