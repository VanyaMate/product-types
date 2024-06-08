import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';
import { DomainUserPreferences } from './DomainUserPreferences';


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
        typeof data['id'] !== 'string' ||
        typeof data['avatar'] !== 'string' ||
        typeof data['login'] !== 'string'
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