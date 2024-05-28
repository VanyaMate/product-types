import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainSearchItem = {
    list: Array<unknown>;
    count: number;
};
export declare const isDomainSearchItem: TypeGuard<DomainSearchItem>;
export declare const assertDomainSearchItem: TypeAssert<DomainSearchItem>;
