import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainCall } from '../../../call/DomainCall';
export type DomainNotificationCallStartData = {
    user: DomainUser;
    call: DomainCall;
};
export declare const isDomainNotificationCallStartData: TypeGuard<DomainNotificationCallStartData>;
export declare const assertDomainNotificationCallStartData: TypeAssert<DomainNotificationCallStartData>;
