import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainAccessTokenPayload = {
    user_id: string;
    id: string;
}

export const isDomainAccessTokenPayload: TypeGuard<DomainAccessTokenPayload> = function (data: unknown): data is DomainAccessTokenPayload {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['user_id'] !== 'string' ||
        typeof data['id'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainAccessTokenPayload: TypeAssert<DomainAccessTokenPayload> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainAccessTokenPayload(data)) {
        throwAssertError(variableName, typeName);
    }
};