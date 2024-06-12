import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { isObject } from '../../_helpers/lib/isObject';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser, isDomainUser } from '../../user/DomainUser';
import {
    DomainPrivateDialogue, isDomainPrivateDialogue,
} from '../../private-dialogue/DomainPrivateDialogue';


export type DomainNotificationUserMessageReadData = {
    user: DomainUser;
    dialogue: DomainPrivateDialogue;
    messageIndex: number;
}

export const isDomainNotificationUserMessageReadData: TypeGuard<DomainNotificationUserMessageReadData> = function (data: unknown): data is DomainNotificationUserMessageReadData {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['messageIndex'] !== 'number' ||
        !isDomainUser(data['user']) ||
        !isDomainPrivateDialogue(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageReadData: TypeAssert<DomainNotificationUserMessageReadData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserMessageReadData(data)) {
        throwAssertError(variableName, typeName);
    }
};