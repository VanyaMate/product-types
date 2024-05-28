import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainSearchItem } from './DomainSearchItem';
export type DomainSearch = {
    profiles?: DomainSearchItem;
};
export declare const isDomainSearch: TypeGuard<DomainSearch>;
export declare const assertDomainSearch: TypeAssert<DomainSearch>;
