import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainUser, isDomainUser } from './DomainUser';
import { DomainUserNameInfo, isDomainUserNameInfo } from './DomainUserNameInfo';
import {
    DomainUserContactsInfo,
    isDomainUserContactsInfo,
} from './DomainUserContactsInfo';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isObject } from '../_helpers/lib/isObject';


export type DomainUserFull =
    DomainUser
    & {
        nameInfo: DomainUserNameInfo;
        contacts: DomainUserContactsInfo;
    };

export const isDomainUserFull: TypeGuard<DomainUserFull> = function (data: unknown): data is DomainUserFull {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data) ||
        !isDomainUserNameInfo(data['nameInfo']) ||
        !isDomainUserContactsInfo(data['contacts'])
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