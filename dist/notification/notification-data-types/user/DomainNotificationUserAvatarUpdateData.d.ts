import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationUserAvatarUpdateData = {
    user: DomainUser;
};
export declare const isDomainNotificationUserAvatarUpdateData: TypeGuard<DomainNotificationUserAvatarUpdateData>;
export declare const assertDomainNotificationUserAvatarUpdateData: TypeAssert<DomainNotificationUserAvatarUpdateData>;
