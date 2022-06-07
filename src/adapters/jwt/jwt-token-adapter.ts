import { sign, verify } from 'jsonwebtoken';
import {
  TokenAdapter,
  GeneratorTokenData,
  VerifyTokenData,
} from '../token-adapter';

export class JwtTokenAdapter implements TokenAdapter {
  async generationToken({ generationUser }: GeneratorTokenData) {
    const token = sign({ user: generationUser }, process.env.JWT_SECRET!, {
      expiresIn: '1d',
    });

    return token;
  }
  async verifyToken({ authToken }: VerifyTokenData) {
    const [type, token] = authToken.split(' ');

    try {
      verify(token, process.env.JWT_SECRET!);

      if (type !== 'Bearer') throw new Error();

      return true;
    } catch (error) {
      return false;
    }
  }
}
