import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainCallAnswer = Record<string, string>;
export declare const isDomainCallAnswer: TypeGuard<DomainCallAnswer>;
export declare const assertDomainCallAnswer: TypeAssert<DomainCallAnswer>;
