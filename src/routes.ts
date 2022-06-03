import { Router } from 'express' 
import { ChangeProductController } from './controllers/product/change-product-controller'
import { TokenUserController } from './controllers/token/token-controller'
import { CreateUserController } from './controllers/user/create-user-controller'
import { VerifyTokenMiddleware } from './middleware/verify-token-middleware'

const routes = Router()

routes.post('/user', new CreateUserController().handle)
routes.post('/token', new TokenUserController().handle)
routes.post('/products')
routes.put('/products', new VerifyTokenMiddleware().handle, new ChangeProductController().handle)
routes.get('/products')
routes.delete('/products')

export default routes