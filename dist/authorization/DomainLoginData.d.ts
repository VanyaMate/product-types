import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLoginData = {
    login: string;
    password: string;
    remember: boolean;
};
export declare const isDomainLoginData: TypeGuard<DomainLoginData>;
export declare const assertDomainLoginData: TypeAssert<DomainLoginData>;
