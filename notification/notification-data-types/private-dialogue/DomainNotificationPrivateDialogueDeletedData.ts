import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../../private-dialogue/DomainPrivateDialogueWithUser';


export type DomainNotificationPrivateDialogueDeletedData = {
    dialogue: DomainPrivateDialogueWithUser
}

export const isDomainNotificationPrivateDialogueDeletedData: TypeGuard<DomainNotificationPrivateDialogueDeletedData> = function (data: unknown): data is DomainNotificationPrivateDialogueDeletedData {
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

export const assertDomainNotificationPrivateDialogueDeletedData: TypeAssert<DomainNotificationPrivateDialogueDeletedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateDialogueDeletedData(data)) {
        throwAssertError(variableName, typeName);
    }
};