import { DomainSearch } from './DomainSearch';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainSearchOptions = {
    query: string;
    searchIn: Array<keyof DomainSearch>;
};
export declare const isDomainSearchOptions: TypeGuard<DomainSearchOptions>;
export declare const assertDomainSearchOptions: TypeAssert<DomainSearchOptions>;
