import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import {
    DomainCallOffer,
    isDomainCallOffer,
} from '../../../call/DomainCallOffer';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import {
    DomainCallAnswer,
    isDomainCallAnswer,
} from '../../../call/DomainCallAnswer';
import { DomainCall, isDomainCall } from '../../../call/DomainCall';


export type DomainNotificationCallAnswerData = {
    user: DomainUser;
    call: DomainCall;
    answer: DomainCallAnswer;
}

export const isDomainNotificationCallAnswerData: TypeGuard<DomainNotificationCallAnswerData> = function (data: unknown): data is DomainNotificationCallAnswerData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        !isDomainCall(data['call']) ||
        !isDomainCallAnswer(data['answer'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationCallAnswerData: TypeAssert<DomainNotificationCallAnswerData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationCallAnswerData(data)) {
        throwAssertError(variableName, typeName);
    }
};