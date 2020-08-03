export * from './fallback';
export * from './errorMessage';

export interface IErrorResponse {
  statusCode: number;
  message: string[];
  error: string;
}
