import { DomainTokens } from '../token';
import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainResponse = {
    data: unknown;
    tokens?: DomainTokens;
}

export const isDomainResponse: TypeGuard<DomainResponse> = function (data: unknown): data is DomainResponse {
    if (typeof data !== 'object') {
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