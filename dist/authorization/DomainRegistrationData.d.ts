import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainRegistrationData = {
    login: string;
    password: string;
    email: string;
    remember: boolean;
};
export declare const isDomainRegistrationData: TypeGuard<DomainRegistrationData>;
export declare const assertDomainRegistrationData: TypeAssert<DomainRegistrationData>;
