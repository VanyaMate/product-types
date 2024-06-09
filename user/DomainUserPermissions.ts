import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export enum DomainUserPermissionsFriendRequest {
    ALL  = 'all',
    NONE = 'none',
}

export enum DomainUserPermissionsPrivateDialogue {
    ALL     = 'all',
    FRIENDS = 'friends',
    NONE    = 'none',
}

export enum DomainUserPermissionsDialogue {
    ALL     = 'all',
    FRIENDS = 'friends',
    NONE    = 'none',
}

export enum DomainUserPermissionsGeneralPage {
    ALL     = 'all',
    FRIENDS = 'friends',
    NONE    = 'none',
}

export type DomainUserPermissions = {
    friendRequest: DomainUserPermissionsFriendRequest;
    privateDialogue: DomainUserPermissionsPrivateDialogue;
    dialogue: DomainUserPermissionsDialogue;
    generalPage: DomainUserPermissionsGeneralPage;
}

export const isDomainUserPermissions: TypeGuard<DomainUserPermissions> = function (data: unknown): data is DomainUserPermissions {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['friendRequest'] !== 'string' ||
        typeof data['privateDialogue'] !== 'string' ||
        typeof data['dialogue'] !== 'string' ||
        typeof data['generalPage'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserPermissions: TypeAssert<DomainUserPermissions> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUserPermissions(data)) {
        throwAssertError(variableName, typeName);
    }
};