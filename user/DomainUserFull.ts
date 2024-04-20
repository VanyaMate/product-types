import { DomainUser, isDomainUser } from './DomainUser';
import { DomainUserNameInfo, isDomainUserNameInfo } from './DomainUserNameInfo';
import {
    DomainUserContactsInfo,
    isDomainUserContactsInfo,
} from './DomainUserContactsInfo';
import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainUserFull =
    DomainUser
    & {
        nameInfo: DomainUserNameInfo;
        contacts: DomainUserContactsInfo;
    };

export const isDomainUserFull: TypeGuard<DomainUserFull> = function (data: unknown): data is DomainUserFull {
    if (typeof data !== 'object') {
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