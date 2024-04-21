import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainRefreshTokenPayload = {
    id: string;
};
export declare const isDomainRefreshTokenPayload: TypeGuard<DomainRefreshTokenPayload>;
export declare const assertDomainRefreshTokenPayload: TypeAssert<DomainRefreshTokenPayload>;
