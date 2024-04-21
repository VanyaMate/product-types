import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';
import { DomainFingerprint, isDomainFingerprint } from '../fingerprint/DomainFingerprint';


export type DomainTokenGenerateData = {
    login: string;
    fingerprint: DomainFingerprint;
}

export const isDomainTokenGenerateData: TypeGuard<DomainTokenGenerateData> = function (data: unknown): data is DomainTokenGenerateData {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['login'] !== 'string' ||
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