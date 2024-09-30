import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainSearchItemOptions = {
    query: string;
    limit: number;
    offset: number;
};
export declare const isDomainSearchItemOptions: TypeGuard<DomainSearchItemOptions>;
export declare const assertDomainSearchItemOptions: TypeAssert<DomainSearchItemOptions>;
