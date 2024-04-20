import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainUser = {
    id: string;
    avatar: string;
    login: string;
};
export declare const isDomainUser: TypeGuard<DomainUser>;
export declare const assertDomainUser: TypeAssert<DomainUser>;
