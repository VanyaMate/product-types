import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainRegistrationData = {
    login: string;
    password: string;
    email: string;
    remember: boolean;
}

export const isDomainRegistrationData: TypeGuard<DomainRegistrationData> = function (data: unknown): data is DomainRegistrationData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['login'] !== 'string' ||
        typeof data['password'] !== 'string' ||
        typeof data['email'] !== 'string' ||
        typeof data['remember'] !== 'boolean'
    ) {
        return false;
    }

    return true;
};

export const assertDomainRegistrationData: TypeAssert<DomainRegistrationData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainRegistrationData(data)) {
        throwAssertError(variableName, typeName);
    }
};