import { DomainFingerprint, isDomainFingerprint } from '../fingerprint/DomainFingerprint';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainTokenGenerateData = {
    user_id: string;
    fingerprint: DomainFingerprint;
}

export const isDomainTokenGenerateData: TypeGuard<DomainTokenGenerateData> = function (data: unknown): data is DomainTokenGenerateData {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['user_id'] !== 'string' ||
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