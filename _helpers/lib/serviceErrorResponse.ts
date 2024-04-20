import {
    DomainServiceResponseError,
    isDomainServiceErrorItem,
    isDomainSimpleError,
} from '../../error';


export const serviceErrorResponse = function (error: unknown, target: string = '', code: number = 0): DomainServiceResponseError {
    if (isDomainServiceErrorItem(error)) {
        return { errors: [ error ] };
    }

    if (isDomainSimpleError(error)) {
        return { errors: [ { target, code, messages: [ error.message ] } ] };
    }

    if (typeof error === 'string') {
        return { errors: [ { target, code, messages: [ error ] } ] };
    }

    return { errors: [ { target, code, messages: [ 'Unknown error' ] } ] };
};