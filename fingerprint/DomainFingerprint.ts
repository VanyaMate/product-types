import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainFingerprint = {
    ip: string;
    browser: string;
    device: string;
}

export const isDomainFingerprint: TypeGuard<DomainFingerprint> = function (data: unknown): data is DomainFingerprint {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['ip'] !== 'string' ||
        typeof data['browser'] !== 'string' ||
        typeof data['device'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainFingerprint: TypeAssert<DomainFingerprint> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainFingerprint(data)) {
        throwAssertError(variableName, typeName);
    }
};