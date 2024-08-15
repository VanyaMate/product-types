import { isObject } from '../_helpers/lib/isObject';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainCallAnswer = Record<string, string>

export const isDomainCallAnswer: TypeGuard<DomainCallAnswer> = function (data: unknown): data is DomainCallAnswer {
    if (!isObject(data)) {
        return false;
    }

    return true;
};

export const assertDomainCallAnswer: TypeAssert<DomainCallAnswer> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainCallAnswer(data)) {
        throwAssertError(variableName, typeName);
    }
};