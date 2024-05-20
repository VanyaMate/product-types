import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainRefreshTokenPayload = {
    id: string;
};
export declare const isDomainRefreshTokenPayload: TypeGuard<DomainRefreshTokenPayload>;
export declare const assertDomainRefreshTokenPayload: TypeAssert<DomainRefreshTokenPayload>;
