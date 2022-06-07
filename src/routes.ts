import { Router } from 'express';
import { ChangeProductController } from './controllers/product/change-product-controller';
import { ConsultProductController } from './controllers/product/consult-product-controller';
import { CreateProductController } from './controllers/product/create-product-controller';
import { DeleteProductController } from './controllers/product/delete-product-controller';
import { TokenUserController } from './controllers/token/token-controller';
import { CreateUserController } from './controllers/user/create-user-controller';
import { VerifyTokenMiddleware } from './middleware/verify-token-middleware';

const routes = Router();

routes.post('/user', new CreateUserController().handle);
routes.post('/login', new TokenUserController().handle);
routes.post(
  '/products',
  new VerifyTokenMiddleware().handle,
  new CreateProductController().handle,
);
routes.put(
  '/products',
  new VerifyTokenMiddleware().handle,
  new ChangeProductController().handle,
);
routes.get(
  '/products/:name',
  new VerifyTokenMiddleware().handle,
  new ConsultProductController().handle,
);
routes.delete(
  '/products/:id',
  new VerifyTokenMiddleware().handle,
  new DeleteProductController().handle,
);

export default routes;
