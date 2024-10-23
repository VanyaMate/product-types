import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isBoolean, isString } from '@vanyamate/types-kit';


export type DomainUser = {
    id: string;
    avatar: string;
    login: string;
    online: boolean;
}

export const isDomainUser: TypeGuard<DomainUser> = function (data: unknown): data is DomainUser {
    return (
        isString(data['id']) &&
        isString(data['avatar']) &&
        isString(data['login']) &&
        isBoolean(data['online'])
    );
};

export const assertDomainUser: TypeAssert<DomainUser> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUser(data)) {
        throwAssertError(variableName, typeName);
    }
};