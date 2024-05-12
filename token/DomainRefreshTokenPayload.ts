import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainRefreshTokenPayload = {
    id: string;
}

export const isDomainRefreshTokenPayload: TypeGuard<DomainRefreshTokenPayload> = function (data: unknown): data is DomainRefreshTokenPayload {
    if (!isObject(data)) {
        return false;
    }

    if (typeof data['id'] !== 'string') {
        return false;
    }

    return true;
};

export const assertDomainRefreshTokenPayload: TypeAssert<DomainRefreshTokenPayload> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainRefreshTokenPayload(data)) {
        throwAssertError(variableName, typeName);
    }
};