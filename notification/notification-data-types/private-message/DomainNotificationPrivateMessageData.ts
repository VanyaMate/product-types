import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainMessage, isDomainMessage } from '../../../message/DomainMessage';
import {
    DomainPrivateDialogue, isDomainPrivateDialogue,
} from '../../../private-dialogue/DomainPrivateDialogue';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../../private-dialogue/DomainPrivateDialogueWithUser';


export type DomainNotificationPrivateMessageData = {
    dialogue: DomainPrivateDialogueWithUser;
    message: DomainMessage;
}

export const isDomainNotificationPrivateMessageData: TypeGuard<DomainNotificationPrivateMessageData> = function (data: unknown): data is DomainNotificationPrivateMessageData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainMessage(data['message']) ||
        !isDomainPrivateDialogueWithUser(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPrivateMessageData: TypeAssert<DomainNotificationPrivateMessageData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateMessageData(data)) {
        throwAssertError(variableName, typeName);
    }
};