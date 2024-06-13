import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';
import {
    DomainPrivateDialogue, isDomainPrivateDialogue,
} from '../../private-dialogue/DomainPrivateDialogue';
import {
    DomainPrivateDialogueWithUser,
    isDomainPrivateDialogueWithUser,
} from '../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage, isDomainMessage } from '../../message/DomainMessage';


export type DomainNotificationPrivateMessageDeletedData = {
    dialogue: DomainPrivateDialogueWithUser;
    message: DomainMessage;
}

export const isDomainNotificationPrivateMessageDeletedData: TypeGuard<DomainNotificationPrivateMessageDeletedData> = function (data: unknown): data is DomainNotificationPrivateMessageDeletedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPrivateDialogueWithUser(data['dialogue']) ||
        !isDomainMessage(data['message'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageDeletedData: TypeAssert<DomainNotificationPrivateMessageDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateMessageDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};