import Koa from 'koa';
import Koa2Cors from 'koa2-cors';
import KoaBodyParser from 'koa-bodyparser';
import { routes } from './routes';

const instance = new Koa();

instance.use(Koa2Cors()).use(KoaBodyParser());
routes.forEach((router) => {
  instance.use(router.routes());
  instance.use(router.allowedMethods());
});

instance.listen(4016, () => console.log('Server listening port 4016.'));
