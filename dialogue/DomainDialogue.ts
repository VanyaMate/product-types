import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainMessage, isDomainMessage } from '../message/DomainMessage';
import { isArray, isString } from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainDialogue = {
    id: string;
    title: string;
    avatar: string;
    users: DomainUser[];
    messages: DomainMessage[];
}

export const isDomainDialogue: TypeGuard<DomainDialogue> = function (data: unknown): data is DomainDialogue {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isString(data['title']) &&
        isString(data['avatar']) &&
        isArray(data['users'], isDomainUser) &&
        isArray(data['messages'], isDomainMessage)
    );
};

export const assertDomainDialogue: TypeAssert<DomainDialogue> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainDialogue(data)) {
        throwAssertError(variableName, typeName);
    }
};