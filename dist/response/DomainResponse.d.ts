import { DomainTokens } from '../token';
import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainResponse = {
    data: unknown;
    tokens?: DomainTokens;
};
export declare const isDomainResponse: TypeGuard<DomainResponse>;
export declare const assertDomainResponse: TypeAssert<DomainResponse>;
