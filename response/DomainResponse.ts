import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainTokens } from '../token/DomainTokens';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainResponse = {
    data: unknown;
    tokens?: DomainTokens;
}

export const isDomainResponse: TypeGuard<DomainResponse> = function (data: unknown): data is DomainResponse {
    if (!isObject(data)) {
        return false;
    }

    if (typeof data['data'] !== 'object') {
        return false;
    }

    return true;
};

export const assertDomainResponse: TypeAssert<DomainResponse> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainResponse(data)) {
        throwAssertError(variableName, typeName);
    }
};