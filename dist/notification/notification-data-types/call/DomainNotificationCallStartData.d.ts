import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationCallStartData = {
    user: DomainUser;
};
export declare const isDomainNotificationCallStartData: TypeGuard<DomainNotificationCallStartData>;
export declare const assertDomainNotificationCallStartData: TypeAssert<DomainNotificationCallStartData>;
