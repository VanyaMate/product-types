import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainUserNameInfo = {
    firstName: string;
    lastName: string;
};
export declare const isDomainUserNameInfo: TypeGuard<DomainUserNameInfo>;
export declare const assertDomainUserNameInfo: TypeAssert<DomainUserNameInfo>;
