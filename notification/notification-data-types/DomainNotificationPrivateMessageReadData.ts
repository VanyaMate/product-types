import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage, isDomainMessage } from '../../message/DomainMessage';


export type DomainNotificationPrivateMessageReadData = {
    dialogue: DomainPrivateDialogueWithUser;
    message: DomainMessage;
}

export const isDomainNotificationPrivateMessageReadData: TypeGuard<DomainNotificationPrivateMessageReadData> = function (data: unknown): data is DomainNotificationPrivateMessageReadData {
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

export const assertDomainNotificationPrivateMessageReadData: TypeAssert<DomainNotificationPrivateMessageReadData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateMessageReadData(data)) {
        throwAssertError(variableName, typeName);
    }
};