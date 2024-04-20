import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainUserContactsInfo = {
    email: string;
    phoneNumber: string;
};
export declare const isDomainUserContactsInfo: TypeGuard<DomainUserContactsInfo>;
export declare const assertDomainUserContactsInfo: TypeAssert<DomainUserContactsInfo>;
