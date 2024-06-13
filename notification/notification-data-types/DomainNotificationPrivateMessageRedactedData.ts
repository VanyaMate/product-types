import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../../user/DomainUser';
import {
    DomainPrivateDialogue, isDomainPrivateDialogue,
} from '../../private-dialogue/DomainPrivateDialogue';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage, isDomainMessage } from '../../message/DomainMessage';


export type DomainNotificationPrivateMessageRedactedData = {
    dialogue: DomainPrivateDialogueWithUser;
    previousMessage: DomainMessage;
    newMessage: DomainMessage;
}

export const isDomainNotificationPrivateMessageRedactedData: TypeGuard<DomainNotificationPrivateMessageRedactedData> = function (data: unknown): data is DomainNotificationPrivateMessageRedactedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPrivateDialogueWithUser(data['dialogue']) ||
        !isDomainMessage(data['previousMessage']) ||
        !isDomainMessage(data['newMessage'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPrivateMessageRedactedData: TypeAssert<DomainNotificationPrivateMessageRedactedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateMessageRedactedData(data)) {
        throwAssertError(variableName, typeName);
    }
};