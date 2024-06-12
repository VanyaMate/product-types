import { DomainUser, isDomainUser } from '../user/DomainUser';
import { isObject } from '../_helpers/lib/isObject';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainMessage } from '../message/DomainMessage';
import {
    DomainPrivateDialogue,
    isDomainPrivateDialogue,
} from './DomainPrivateDialogue';


export type DomainPrivateDialogueFull = DomainPrivateDialogue & {
    createdDate: string;

    meArchived: boolean;
    meDeleted: boolean;
    companionArchived: boolean;
    companionDeleted: boolean;

    user: DomainUser;
    messages: DomainMessage[];
}

export const isDomainPrivateDialogueFull: TypeGuard<DomainPrivateDialogueFull> = function (data: unknown): data is DomainPrivateDialogueFull {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPrivateDialogue(data) ||
        typeof data['createdDate'] !== 'string' ||
        typeof data['meArchived'] !== 'boolean' ||
        typeof data['meDeleted'] !== 'boolean' ||
        typeof data['companionArchived'] !== 'boolean' ||
        typeof data['companionDeleted'] !== 'boolean' ||
        !isDomainUser(data['user']) ||
        !Array.isArray(data['messages'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainPrivateDialogueFull: TypeAssert<DomainPrivateDialogueFull> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainPrivateDialogueFull(data)) {
        throwAssertError(variableName, typeName);
    }
};