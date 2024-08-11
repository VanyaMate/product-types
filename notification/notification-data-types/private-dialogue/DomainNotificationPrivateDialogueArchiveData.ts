import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../../private-dialogue/DomainPrivateDialogueWithUser';


export type DomainNotificationPrivateDialogueArchiveData = {
    dialogue: DomainPrivateDialogueWithUser;
}

export const isDomainNotificationPrivateDialogueArchiveData: TypeGuard<DomainNotificationPrivateDialogueArchiveData> = function (data: unknown): data is DomainNotificationPrivateDialogueArchiveData {
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

export const assertDomainNotificationPrivateDialogueArchiveData: TypeAssert<DomainNotificationPrivateDialogueArchiveData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateDialogueArchiveData(data)) {
        throwAssertError(variableName, typeName);
    }
};