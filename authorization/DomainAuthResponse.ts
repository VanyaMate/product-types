import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';
import { DomainUser, isDomainUser } from '../user';


export type DomainAuthResponse = {
    token: string;
    user: DomainUser;
}

export const isDomainAuthResponse: TypeGuard<DomainAuthResponse> = function (data: unknown): data is DomainAuthResponse {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['token'] !== 'string' ||
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