import {
    DomainUserContactsInfo,
    isDomainUserContactsInfo,
} from '../../../user/DomainUserContactsInfo';
import { DomainUser, isDomainUser } from '../../../user/DomainUser';
import { isObject } from '../../../_helpers/lib/isObject';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { throwAssertError } from '../../../_helpers/lib/throwAssertError';


export type DomainNotificationUserContactInfoUpdateData = {
    user: DomainUser;
    previousContacts: DomainUserContactsInfo;
    currentContacts: DomainUserContactsInfo;
}

export const isDomainNotificationUserContactInfoUpdateData: TypeGuard<DomainNotificationUserContactInfoUpdateData> = function (data: unknown): data is DomainNotificationUserContactInfoUpdateData {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isDomainUser(data['user']) ||
        !isDomainUserContactsInfo(data['previousContacts']) ||
        !isDomainUserContactsInfo(data['currentContacts'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainNotificationUserContactInfoUpdateData: TypeAssert<DomainNotificationUserContactInfoUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationUserContactInfoUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};