import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainLoginData = {
    login: string;
    password: string;
    remember: boolean;
}

export const isDomainLoginData: TypeGuard<DomainLoginData> = function (data: unknown): data is DomainLoginData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['login'] !== 'string' ||
        typeof data['password'] !== 'string' ||
        typeof data['remember'] !== 'boolean'
    ) {
        return false;
    }

    return true;
};

export const assertDomainLoginData: TypeAssert<DomainLoginData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainLoginData(data)) {
        throwAssertError(variableName, typeName);
    }
};