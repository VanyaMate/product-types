import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export declare enum DomainUserPermissionsFriendRequest {
    ALL = "all",
    NONE = "none"
}
export declare enum DomainUserPermissionsPrivateDialogue {
    ALL = "all",
    FRIENDS = "friends",
    NONE = "none"
}
export declare enum DomainUserPermissionsDialogue {
    ALL = "all",
    FRIENDS = "friends",
    NONE = "none"
}
export declare enum DomainUserPermissionsGeneralPage {
    ALL = "all",
    FRIENDS = "friends",
    NONE = "none"
}
export type DomainUserPermissions = {
    friendRequest: DomainUserPermissionsFriendRequest;
    privateDialogue: DomainUserPermissionsPrivateDialogue;
    dialogue: DomainUserPermissionsDialogue;
    generalPage: DomainUserPermissionsGeneralPage;
};
export declare const isDomainUserPermissions: TypeGuard<DomainUserPermissions>;
export declare const assertDomainUserPermissions: TypeAssert<DomainUserPermissions>;
