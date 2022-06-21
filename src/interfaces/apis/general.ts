export interface IResult<T> {
  statusCode?: number;
  success?: boolean;
  result?: T;
}
