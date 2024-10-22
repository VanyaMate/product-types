import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';
import { isString } from '@vanyamate/types-kit';


export type DomainUser = {
    id: string;
    avatar: string;
    login: string;
}

export const isDomainUser: TypeGuard<DomainUser> = function (data: unknown): data is DomainUser {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isString(data['id']) ||
        !isString(data['avatar']) ||
        !isString(data['login'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainUser: TypeAssert<DomainUser> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUser(data)) {
        throwAssertError(variableName, typeName);
    }
};