import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainUserContactsInfo = {
    email: string;
    phoneNumber: string;
};
export declare const isDomainUserContactsInfo: TypeGuard<DomainUserContactsInfo>;
export declare const assertDomainUserContactsInfo: TypeAssert<DomainUserContactsInfo>;
