import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isBoolean,
} from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from './DomainUser';


export type DomainUserWithOnline =
    DomainUser
    & {
        online: boolean;
    }

export const isDomainUserWithOnline: TypeGuard<DomainUserWithOnline> = function (data): data is DomainUserWithOnline {
    return (
        isDomainUser(data) &&
        isBoolean(data['online'])
    );
};

export const assertDomainUserWithOnline: TypeAssert<DomainUserWithOnline> = function (data, errorMessage) {
    if (!isDomainUserWithOnline(data)) {
        throw errorMessage(data);
    }
};