import { DomainCallOffer } from '../../../call/DomainCallOffer';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainCall } from '../../../call/DomainCall';
export type DomainNotificationCallOfferData = {
    call: DomainCall;
    offer: DomainCallOffer;
};
export declare const isDomainNotificationCallOfferData: TypeGuard<DomainNotificationCallOfferData>;
export declare const assertDomainNotificationCallOfferData: TypeAssert<DomainNotificationCallOfferData>;
