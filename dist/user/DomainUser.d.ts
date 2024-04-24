import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainUser = {
    id: string;
    avatar: string;
    login: string;
};
export declare const isDomainUser: TypeGuard<DomainUser>;
export declare const assertDomainUser: TypeAssert<DomainUser>;
