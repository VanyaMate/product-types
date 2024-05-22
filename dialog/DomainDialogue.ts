import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainUser } from '../user/DomainUser';
import { DomainMessage } from '../message/DomainMessage';


export type DomainDialogue = {
    id: string;
    title: string;
    avatar: string;
    users: DomainUser[];
    messages: DomainMessage[];
}

export const isDomainDialogue: TypeGuard<DomainDialogue> = function (data: unknown): data is DomainDialogue {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['avatar'] !== 'string' ||
        !Array.isArray(data['users']) ||
        !Array.isArray(data['messages'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainDialogue: TypeAssert<DomainDialogue> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainDialogue(data)) {
        throwAssertError(variableName, typeName);
    }
};