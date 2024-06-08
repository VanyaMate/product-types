import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export declare enum DomainUserPreferencesFriendRequest {
    ALL = "all",
    NONE = "none"
}
export declare enum DomainUserPreferencesPrivateDialogue {
    ALL = "all",
    FRIENDS = "friends",
    NONE = "none"
}
export declare enum DomainUserPreferencesDialogue {
    ALL = "all",
    FRIENDS = "friends",
    NONE = "none"
}
export declare enum DomainUserPreferencesGeneralPage {
    ALL = "all",
    FRIENDS = "friends",
    NONE = "none"
}
export type DomainUserPreferences = {
    friendRequest: DomainUserPreferencesFriendRequest;
    privateDialogue: DomainUserPreferencesPrivateDialogue;
    dialogue: DomainUserPreferencesDialogue;
    generalPage: DomainUserPreferencesGeneralPage;
};
export declare const isDomainUserPreferences: TypeGuard<DomainUserPreferences>;
export declare const assertDomainUserPreferences: TypeAssert<DomainUserPreferences>;
