import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainUserNameInfo = {
    firstName: string;
    lastName: string;
};
export declare const isDomainUserNameInfo: TypeGuard<DomainUserNameInfo>;
export declare const assertDomainUserNameInfo: TypeAssert<DomainUserNameInfo>;
