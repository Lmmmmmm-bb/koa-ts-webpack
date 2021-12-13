export interface IBaseResponse {
  status: number;
  msg: string;
}

export interface IDataResponse<T> extends IBaseResponse {
  data: T;
}

export enum HttpStatus {
  'OK' = 200,
  'Bad Request' = 400,
  'Unauthorized' = 401,
  'Not Found' = 404,
  'Internal Server Error' = 500,
  'Not Implemented' = 501
}
