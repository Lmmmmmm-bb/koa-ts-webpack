import { Context } from 'koa';
import KoaRouter from 'koa-router';
import { IBaseResponse, HttpStatus } from '../../../models/response.model';

const defaultRouter = new KoaRouter();

defaultRouter.get('(.*)', (ctx: Context) => {
  const responseBody: IBaseResponse = { status: 0, msg: '' };
  responseBody.status = HttpStatus['Not Implemented'];
  responseBody.msg = 'Not Implemented';

  ctx.response.status = responseBody.status;
  ctx.response.body = responseBody;
});

export default defaultRouter;
