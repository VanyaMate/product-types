import { DomainUser } from '../../../user/DomainUser';
import { DomainUserPermissions } from '../../../user/DomainUserPermissions';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationUserPermissionsUpdateData = {
    user: DomainUser;
    previousPermissions: DomainUserPermissions;
    currentPermissions: DomainUserPermissions;
};
export declare const isDomainNotificationUserPermissionsUpdateData: TypeGuard<DomainNotificationUserPermissionsUpdateData>;
export declare const assertDomainNotificationUserPermissionsUpdateData: TypeAssert<DomainNotificationUserPermissionsUpdateData>;
