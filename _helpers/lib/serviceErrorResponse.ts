import {
    DomainServiceResponseError,
    isDomainServiceErrorItem, isDomainServiceResponseError,
    isDomainSimpleError,
} from '../../error';


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