import { isObject } from '../../_helpers/lib/isObject';
import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainMessage, isDomainMessage } from '../../message/DomainMessage';
import { DomainDialogue, isDomainDialogue } from '../../dialog/DomainDialogue';


export type DomainNotificationUserMessageData = {
    dialogue: DomainDialogue;
    message: DomainMessage;
}

export const isDomainNotificationUserMessageData: TypeGuard<DomainNotificationUserMessageData> = function (data: unknown): data is DomainNotificationUserMessageData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainMessage(data['message']) ||
        !isDomainDialogue(data['dialogue'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserMessageData: TypeAssert<DomainNotificationUserMessageData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserMessageData(data)) {
        throwAssertError(variableName, typeName);
    }
};