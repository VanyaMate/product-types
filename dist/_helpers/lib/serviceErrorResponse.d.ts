import { DomainServiceResponseError } from '../../error';
export declare const serviceErrorResponse: (error: unknown, target?: string, code?: number, title?: string) => DomainServiceResponseError;
