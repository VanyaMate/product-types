import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationUserLoginUpdateData = {
    user: DomainUser;
};
export declare const isDomainNotificationUserLoginUpdateData: TypeGuard<DomainNotificationUserLoginUpdateData>;
export declare const assertDomainNotificationUserLoginUpdateData: TypeAssert<DomainNotificationUserLoginUpdateData>;
