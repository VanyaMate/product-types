import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainTokens = [string, string];
export declare const isDomainTokens: TypeGuard<DomainTokens>;
export declare const assertDomainTokens: TypeAssert<DomainTokens>;
