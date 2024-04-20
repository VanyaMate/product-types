import { TypeAssert, TypeGuard } from '../_helpers/types';
import { throwAssertError } from '../_helpers/lib';


export type DomainUserContactsInfo = {
    email: string;
    phoneNumber: string;
}

export const isDomainUserContactsInfo: TypeGuard<DomainUserContactsInfo> = function (data: unknown): data is DomainUserContactsInfo {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['email'] !== 'string' ||
        typeof data['phoneNumber'] !== 'string'
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserContactsInfo: TypeAssert<DomainUserContactsInfo> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUserContactsInfo(data)) {
        throwAssertError(variableName, typeName);
    }
};