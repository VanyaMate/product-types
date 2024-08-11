import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import {
    DomainPrivateDialogue, isDomainPrivateDialogue,
} from '../../../private-dialogue/DomainPrivateDialogue';


export type DomainNotificationUserMessageDeletedData = {
    user: DomainUser;
    dialogue: DomainPrivateDialogue;
    message: string;
    messageIndex: string;
}

export const isDomainNotificationUserMessageDeletedData: TypeGuard<DomainNotificationUserMessageDeletedData> = function (data: unknown): data is DomainNotificationUserMessageDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['message'] !== 'string' ||
        typeof data['messageIndex'] !== 'string' ||
        !isDomainUser(data['user']) ||
        !isDomainPrivateDialogue(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageDeletedData: TypeAssert<DomainNotificationUserMessageDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserMessageDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};