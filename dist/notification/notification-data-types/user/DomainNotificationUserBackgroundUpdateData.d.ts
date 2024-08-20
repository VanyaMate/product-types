import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationUserBackgroundUpdateData = {
    user: DomainUser;
    previousBackground: string;
    currentBackground: string;
};
export declare const isDomainNotificationUserBackgroundUpdateData: TypeGuard<DomainNotificationUserBackgroundUpdateData>;
export declare const assertDomainNotificationUserBackgroundUpdateData: TypeAssert<DomainNotificationUserBackgroundUpdateData>;
