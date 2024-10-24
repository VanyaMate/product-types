import {
    DomainCallOffer,
    isDomainCallOffer,
} from '../../../call/DomainCallOffer';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';
import { DomainCall, isDomainCall } from '../../../call/DomainCall';


export type DomainNotificationCallOfferData = {
    call: DomainCall;
    offer: DomainCallOffer;
}

export const isDomainNotificationCallOfferData: TypeGuard<DomainNotificationCallOfferData> = function (data: unknown): data is DomainNotificationCallOfferData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainCallOffer(data['offer']) ||
        !isDomainCall(data['call'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationCallOfferData: TypeAssert<DomainNotificationCallOfferData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationCallOfferData(data)) {
        throwAssertError(variableName, typeName);
    }
};