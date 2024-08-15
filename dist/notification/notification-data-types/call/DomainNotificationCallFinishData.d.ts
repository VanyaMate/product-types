import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationCallFinishData = {
    user: DomainUser;
};
export declare const isDomainNotificationCallFinishData: TypeGuard<DomainNotificationCallFinishData>;
export declare const assertDomainNotificationCallFinishData: TypeAssert<DomainNotificationCallFinishData>;
