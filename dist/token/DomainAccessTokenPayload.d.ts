import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainAccessTokenPayload = {
    user_id: string;
    id: string;
};
export declare const isDomainAccessTokenPayload: TypeGuard<DomainAccessTokenPayload>;
export declare const assertDomainAccessTokenPayload: TypeAssert<DomainAccessTokenPayload>;
