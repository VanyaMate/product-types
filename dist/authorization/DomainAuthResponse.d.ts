import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUserFull } from '../user/DomainUserFull';
export type DomainAuthResponse = {
    tokens: [string, string];
    user: DomainUserFull;
};
export declare const isDomainAuthResponse: TypeGuard<DomainAuthResponse>;
export declare const assertDomainAuthResponse: TypeAssert<DomainAuthResponse>;
