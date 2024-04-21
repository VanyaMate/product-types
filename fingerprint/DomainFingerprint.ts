import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainFingerprint = {
    ip: string;
    browser: string;
    device: string;
}

export const isDomainFingerprint: TypeGuard<DomainFingerprint> = function (data: unknown): data is DomainFingerprint {
    if (typeof data !== 'object') {
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