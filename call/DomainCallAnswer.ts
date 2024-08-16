import { isObject } from '../_helpers/lib/isObject';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isOptional } from '../_helpers/lib/isOptional';
import { isArray } from '../_helpers/lib/isArray';


export type DomainCallAnswer = {
    answer: RTCLocalSessionDescriptionInit;
    candidates: unknown[];
};

export const isDomainCallAnswer: TypeGuard<DomainCallAnswer> = function (data: unknown): data is DomainCallAnswer {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isObject(data['answer']) ||
        !isArray(data['candidates'], (item: unknown): item is unknown => true)
    ) {
        return false;
    }

    return true;
};

export const assertDomainCallAnswer: TypeAssert<DomainCallAnswer> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainCallAnswer(data)) {
        throwAssertError(variableName, typeName);
    }
};