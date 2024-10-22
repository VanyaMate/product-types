import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import {
    DomainUserWithOnline,
    isDomainUserWithOnline,
} from '../user/DomainUserWithOnline';


export type DomainPrivateDialogueWithUser = {
    id: string;
    title: string;
    avatar: string;
    user: DomainUserWithOnline;
}

export const isDomainPrivateDialogueWithUser: TypeGuard<DomainPrivateDialogueWithUser> = function (data: unknown): data is DomainPrivateDialogueWithUser {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['title'] !== 'string' ||
        typeof data['avatar'] !== 'string' ||
        !isDomainUserWithOnline(data['user'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainPrivateDialogueWithUser: TypeAssert<DomainPrivateDialogueWithUser> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainPrivateDialogueWithUser(data)) {
        throwAssertError(variableName, typeName);
    }
};