import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainLoginData = {
    login: string;
    password: string;
    remember: boolean;
};
export declare const isDomainLoginData: TypeGuard<DomainLoginData>;
export declare const assertDomainLoginData: TypeAssert<DomainLoginData>;
