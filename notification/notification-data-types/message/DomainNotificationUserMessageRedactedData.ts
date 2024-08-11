import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import {
    DomainPrivateDialogue, isDomainPrivateDialogue,
} from '../../../private-dialogue/DomainPrivateDialogue';


export type DomainNotificationUserMessageRedactedData = {
    user: DomainUser;
    dialogue: DomainPrivateDialogue;
    previousMessage: string;
    newMessage: string;
    messageIndex: string;
}

export const isDomainNotificationUserMessageRedactedData: TypeGuard<DomainNotificationUserMessageRedactedData> = function (data: unknown): data is DomainNotificationUserMessageRedactedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['previousMessage'] !== 'string' ||
        typeof data['newMessage'] !== 'string' ||
        typeof data['messageIndex'] !== 'string' ||
        !isDomainUser(data['user']) ||
        !isDomainPrivateDialogue(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageRedactedData: TypeAssert<DomainNotificationUserMessageRedactedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserMessageRedactedData(data)) {
        throwAssertError(variableName, typeName);
    }
};