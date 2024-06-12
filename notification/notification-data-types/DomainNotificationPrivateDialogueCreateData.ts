import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import {
    DomainPrivateDialogueFull, isDomainPrivateDialogueFull,
} from '../../private-dialogue/DomainPrivateDialogueFull';


export type DomainNotificationPrivateDialogueCreateData = {
    dialogue: DomainPrivateDialogueFull
}

export const isDomainNotificationPrivateDialogueCreateData: TypeGuard<DomainNotificationPrivateDialogueCreateData> = function (data: unknown): data is DomainNotificationPrivateDialogueCreateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainPrivateDialogueFull(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationPrivateDialogueCreateData: TypeAssert<DomainNotificationPrivateDialogueCreateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationPrivateDialogueCreateData(data)) {
        throwAssertError(variableName, typeName);
    }
};