import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainTokens } from '../token/DomainTokens';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainResponse = {
    data: unknown;
    tokens?: DomainTokens;
};
export declare const isDomainResponse: TypeGuard<DomainResponse>;
export declare const assertDomainResponse: TypeAssert<DomainResponse>;
