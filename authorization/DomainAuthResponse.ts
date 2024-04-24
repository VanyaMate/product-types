import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainUser, isDomainUser } from '../user/DomainUser';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainAuthResponse = {
    tokens: [ string, string ];
    user: DomainUser;
}

export const isDomainAuthResponse: TypeGuard<DomainAuthResponse> = function (data: unknown): data is DomainAuthResponse {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        !Array.isArray(data['tokens']) ||
        typeof data['tokens'][0] !== 'string' ||
        typeof data['tokens'][1] !== 'string' ||
        !isDomainUser(data['user'])
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