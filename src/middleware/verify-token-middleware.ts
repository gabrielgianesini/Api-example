import { NextFunction, Request, Response } from 'express'
import { JwtTokenAdapter } from '../adapters/jwt/jwt-token-adapter'
import { VerifyTokenUseCase } from '../use-cases/token/verify-token-use-case'

interface VerifyTokenMiddlewareRequest{
  authToken: string
}

export class VerifyTokenMiddleware {
  async handle(request: Request, response: Response,next: NextFunction){
    const { authToken } = request.headers
    const jwtTokenAdapter = new JwtTokenAdapter()
    const verifyTokenUseCase = new VerifyTokenUseCase(jwtTokenAdapter)

    try {
      const result = await verifyTokenUseCase.verifyToken({authToken} as VerifyTokenMiddlewareRequest)
      if(!result) throw new Error()
      return next()
      
    } catch (error) {
      return response.status(400).send('Check the token sent')
    }

  }
}