import {
    DomainFingerprint,
    isDomainFingerprint,
} from '../fingerprint/DomainFingerprint';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainTokenGenerateData = {
    userId: string;
    fingerprint: DomainFingerprint;
}

export const isDomainTokenGenerateData: TypeGuard<DomainTokenGenerateData> = function (data: unknown): data is DomainTokenGenerateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['userId'] !== 'string' ||
        !isDomainFingerprint(data['fingerprint'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainTokenGenerateData: TypeAssert<DomainTokenGenerateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainTokenGenerateData(data)) {
        throwAssertError(variableName, typeName);
    }
};