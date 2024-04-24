import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainTokens = [string, string];
export declare const isDomainTokens: TypeGuard<DomainTokens>;
export declare const assertDomainTokens: TypeAssert<DomainTokens>;
