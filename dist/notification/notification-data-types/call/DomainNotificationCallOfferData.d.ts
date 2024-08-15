import { DomainUser } from '../../../user/DomainUser';
import { DomainCallOffer } from '../../../call/DomainCallOffer';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationCallOfferData = {
    user: DomainUser;
    offer: DomainCallOffer;
};
export declare const isDomainNotificationCallOfferData: TypeGuard<DomainNotificationCallOfferData>;
export declare const assertDomainNotificationCallOfferData: TypeAssert<DomainNotificationCallOfferData>;
