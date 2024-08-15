import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainCallOffer = Record<string, string>;
export declare const isDomainCallOffer: TypeGuard<DomainCallOffer>;
export declare const assertDomainCallOffer: TypeAssert<DomainCallOffer>;