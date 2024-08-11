import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage, isDomainMessage } from '../../../message/DomainMessage';


export type DomainNotificationPrivateMessageReadAllData = {
    dialogue: DomainPrivateDialogueWithUser;
}

export const isDomainNotificationPrivateMessageReadAllData: TypeGuard<DomainNotificationPrivateMessageReadAllData> = function (data: unknown): data is DomainNotificationPrivateMessageReadAllData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPrivateDialogueWithUser(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPrivateMessageReadAllData: TypeAssert<DomainNotificationPrivateMessageReadAllData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateMessageReadAllData(data)) {
        throwAssertError(variableName, typeName);
    }
};