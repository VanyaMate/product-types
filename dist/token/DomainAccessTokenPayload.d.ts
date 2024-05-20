import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainAccessTokenPayload = {
    user_id: string;
    id: string;
};
export declare const isDomainAccessTokenPayload: TypeGuard<DomainAccessTokenPayload>;
export declare const assertDomainAccessTokenPayload: TypeAssert<DomainAccessTokenPayload>;
