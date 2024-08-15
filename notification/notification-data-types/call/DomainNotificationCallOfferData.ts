import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import {
    DomainCallOffer,
    isDomainCallOffer,
} from '../../../call/DomainCallOffer';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationCallOfferData = {
    user: DomainUser;
    offer: DomainCallOffer;
}

export const isDomainNotificationCallOfferData: TypeGuard<DomainNotificationCallOfferData> = function (data: unknown): data is DomainNotificationCallOfferData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        !isDomainCallOffer(data['offer'])
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