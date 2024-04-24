import {
    DomainServiceResponseError,
    isDomainServiceResponseError,
} from '../../error/DomainServiceResponseError';
import { isDomainServiceErrorItem } from '../../error/DomainServiceErrorItem';
import { isDomainSimpleError } from '../../error/DomainSimpleError';


export const serviceErrorResponse = function (error: unknown, target: string = '', code: number = 0, title: string = ''): DomainServiceResponseError {
    if (isDomainServiceResponseError(error)) {
        return error;
    }

    if (isDomainServiceErrorItem(error)) {
        return { errors: [ error ] };
    }

    if (isDomainSimpleError(error)) {
        return { errors: [ { target, code, title, messages: [ error.message ] } ] };
    }

    if (typeof error === 'string') {
        return { errors: [ { target, code, title, messages: [ error ] } ] };
    }

    return { errors: [ { target, code, title, messages: [ 'Unknown error' ] } ] };
};