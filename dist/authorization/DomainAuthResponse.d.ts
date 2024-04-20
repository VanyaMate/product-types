import { TypeAssert, TypeGuard } from '../_helpers/types';
import { DomainUser } from '../user';
export type DomainAuthResponse = {
    token: string;
    user: DomainUser;
};
export declare const isDomainAuthResponse: TypeGuard<DomainAuthResponse>;
export declare const assertDomainAuthResponse: TypeAssert<DomainAuthResponse>;
