import Koa from 'koa';
import Koa2Cors from 'koa2-cors';
import KoaBodyParser from 'koa-bodyparser';
import Routes from './routes';

const Server = new Koa();

Server.use(Koa2Cors()).use(KoaBodyParser());
Routes.forEach((router) => {
  Server.use(router.routes());
  Server.use(router.allowedMethods());
});

Server.listen(4016, () => {
  console.log('Server listening port 4016.');
});
