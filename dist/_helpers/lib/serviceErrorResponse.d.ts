import { DomainServiceResponseError } from '../../error/DomainServiceResponseError';
export declare const serviceErrorResponse: (error: unknown, target?: string, code?: number, title?: string) => DomainServiceResponseError;
