import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainUserNameInfo, isDomainUserNameInfo } from './DomainUserNameInfo';
import {
    DomainUserContactsInfo,
    isDomainUserContactsInfo,
} from './DomainUserContactsInfo';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';
import {
    DomainUserPermissions,
    isDomainUserPermissions,
} from './DomainUserPermissions';
import { DomainUser, isDomainUser } from './DomainUser';


export type DomainUserFull =
    DomainUser
    & {
        background: string | null;
        nameInfo: DomainUserNameInfo;
        contacts: DomainUserContactsInfo;
        permissions: DomainUserPermissions;
    };

export const isDomainUserFull: TypeGuard<DomainUserFull> = function (data: unknown): data is DomainUserFull {
    if (!isObject(data)) {
        return false;
    }

    if (typeof data['background'] !== 'string' && data['background'] !== null) {
        return false;
    }

    if (
        !isDomainUser(data) ||
        !isDomainUserNameInfo(data['nameInfo']) ||
        !isDomainUserContactsInfo(data['contacts']) ||
        !isDomainUserPermissions(data['permissions'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserFull: TypeAssert<DomainUserFull> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUserFull(data)) {
        throwAssertError(variableName, typeName);
    }
};