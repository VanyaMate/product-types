import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainUser } from '../user/DomainUser';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainAuthResponse = {
    tokens: [string, string];
    user: DomainUser;
};
export declare const isDomainAuthResponse: TypeGuard<DomainAuthResponse>;
export declare const assertDomainAuthResponse: TypeAssert<DomainAuthResponse>;
