import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';
import { DomainServerErrorItem, isDomainServerErrorItem } from './DomainServerErrorItem';


export type DomainServerResponseError = {
    errors: DomainServerErrorItem[];
}

export const isDomainServerResponseError: TypeGuard<DomainServerResponseError> = function (data: unknown): data is DomainServerResponseError {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        !Array.isArray(data['errors']) ||
        !data['errors'].every((error) => isDomainServerErrorItem(error))
    ) {
        return false;
    }

    return true;
};

export const assertDomainServerResponseError: TypeAssert<DomainServerResponseError> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainServerResponseError(data)) {
        throwAssertError(variableName, typeName);
    }
};