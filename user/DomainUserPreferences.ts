import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export enum DomainUserPreferencesFriendRequest {
    ALL  = 'all',
    NONE = 'none',
}

export enum DomainUserPreferencesPrivateDialogue {
    ALL     = 'all',
    FRIENDS = 'friends',
    NONE    = 'none',
}

export enum DomainUserPreferencesDialogue {
    ALL     = 'all',
    FRIENDS = 'friends',
    NONE    = 'none',
}

export enum DomainUserPreferencesGeneralPage {
    ALL     = 'all',
    FRIENDS = 'friends',
    NONE    = 'none',
}

export type DomainUserPreferences = {
    friendRequest: DomainUserPreferencesFriendRequest;
    privateDialogue: DomainUserPreferencesPrivateDialogue;
    dialogue: DomainUserPreferencesDialogue;
    generalPage: DomainUserPreferencesGeneralPage;
}

export const isDomainUserPreferences: TypeGuard<DomainUserPreferences> = function (data: unknown): data is DomainUserPreferences {
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

export const assertDomainUserPreferences: TypeAssert<DomainUserPreferences> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUserPreferences(data)) {
        throwAssertError(variableName, typeName);
    }
};