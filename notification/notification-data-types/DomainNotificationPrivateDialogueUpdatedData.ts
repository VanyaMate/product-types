import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import {
    DomainPrivateDialogueWithUser, isDomainPrivateDialogueWithUser,
} from '../../private-dialogue/DomainPrivateDialogueWithUser';


export type DomainNotificationPrivateDialogueUpdatedData = {
    dialogue: DomainPrivateDialogueWithUser,
    previous: DomainPrivateDialogueWithUser;
}

export const isDomainNotificationPrivateDialogueUpdatedData: TypeGuard<DomainNotificationPrivateDialogueUpdatedData> = function (data: unknown): data is DomainNotificationPrivateDialogueUpdatedData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPrivateDialogueWithUser(data['dialogue']) ||
        !isDomainPrivateDialogueWithUser(data['previous'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPrivateDialogueUpdatedData: TypeAssert<DomainNotificationPrivateDialogueUpdatedData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateDialogueUpdatedData(data)) {
        throwAssertError(variableName, typeName);
    }
};