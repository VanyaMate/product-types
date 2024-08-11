import { TypeGuard } from '../_helpers/types/guard.types';
import { isDomainUser } from '../user/DomainUser';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';
import { DomainUserFull, isDomainUserFull } from '../user/DomainUserFull';


export type DomainAuthResponse = {
    tokens: [ string, string ];
    user: DomainUserFull;
}

export const isDomainAuthResponse: TypeGuard<DomainAuthResponse> = function (data: unknown): data is DomainAuthResponse {
    if (!isObject(data)) {
        return false;
    }

    if (
        !Array.isArray(data['tokens']) ||
        typeof data['tokens'][0] !== 'string' ||
        typeof data['tokens'][1] !== 'string' ||
        !isDomainUserFull(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainAuthResponse: TypeAssert<DomainAuthResponse> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainAuthResponse(data)) {
        throwAssertError(variableName, typeName);
    }
};