import {
    DomainServiceErrorItem,
    isDomainServiceErrorItem,
} from './DomainServiceErrorItem';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainServiceResponseError = {
    errors: DomainServiceErrorItem[];
}

export const isDomainServiceResponseError: TypeGuard<DomainServiceResponseError> = function (data: unknown): data is DomainServiceResponseError {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        !Array.isArray(data['errors']) ||
        !data['errors'].every((error) => isDomainServiceErrorItem(error))
    ) {
        return false;
    }

    return true;
};

export const assertDomainServiceResponseError: TypeAssert<DomainServiceResponseError> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainServiceResponseError(data)) {
        throwAssertError(variableName, typeName);
    }
};