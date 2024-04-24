import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainUserNameInfo = {
    firstName: string;
    lastName: string;
}

export const isDomainUserNameInfo: TypeGuard<DomainUserNameInfo> = function (data: unknown): data is DomainUserNameInfo {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['firstName'] !== 'string' ||
        typeof data['lastName'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserNameInfo: TypeAssert<DomainUserNameInfo> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUserNameInfo(data)) {
        throwAssertError(variableName, typeName);
    }
};