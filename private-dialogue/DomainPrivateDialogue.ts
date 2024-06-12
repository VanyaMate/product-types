import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainPrivateDialogue = {
    id: string;
    title: string;
    avatar: string;
}

export const isDomainPrivateDialogue: TypeGuard<DomainPrivateDialogue> = function (data: unknown): data is DomainPrivateDialogue {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['avatar'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainPrivateDialogue: TypeAssert<DomainPrivateDialogue> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainPrivateDialogue(data)) {
        throwAssertError(variableName, typeName);
    }
};