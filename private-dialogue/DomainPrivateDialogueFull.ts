import { isObject } from '../_helpers/lib/isObject';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainMessage, isDomainMessage } from '../message/DomainMessage';
import {
    DomainPrivateDialogue,
    isDomainPrivateDialogue,
} from './DomainPrivateDialogue';
import { isArray } from '../_helpers/lib/isArray';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainPrivateDialogueFull =
    DomainPrivateDialogue
    & {
        createdDate: number;

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
        typeof data['createdDate'] !== 'number' ||
        typeof data['meArchived'] !== 'boolean' ||
        typeof data['meDeleted'] !== 'boolean' ||
        typeof data['companionArchived'] !== 'boolean' ||
        typeof data['companionDeleted'] !== 'boolean' ||
        !isDomainUser(data['user']) ||
        !isArray(data['messages'], isDomainMessage)
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