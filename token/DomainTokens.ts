import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainTokens = [ string, string ];

export const isDomainTokens: TypeGuard<DomainTokens> = function (data: unknown): data is DomainTokens {
    if (!Array.isArray(data)) {
        return false;
    }

    if (
        typeof data[0] !== 'string' ||
        typeof data[1] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainTokens: TypeAssert<DomainTokens> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainTokens(data)) {
        throwAssertError(variableName, typeName);
    }
};