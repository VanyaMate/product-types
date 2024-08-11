import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import {
    DomainUserPermissions,
    isDomainUserPermissions,
} from '../../../user/DomainUserPermissions';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationUserPermissionsUpdateData = {
    user: DomainUser;
    previousPermissions: DomainUserPermissions;
    currentPermissions: DomainUserPermissions;
}

export const isDomainNotificationUserPermissionsUpdateData: TypeGuard<DomainNotificationUserPermissionsUpdateData> = function (data: unknown): data is DomainNotificationUserPermissionsUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        !isDomainUserPermissions(data['previousPermissions']) ||
        !isDomainUserPermissions(data['currentPermissions'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserPermissionsUpdateData: TypeAssert<DomainNotificationUserPermissionsUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserPermissionsUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};