import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainSearchCursorOptions = {
    query: string;
    cursor: string;
    limit: number;
};
export declare const isDomainSearchCursorOptions: TypeGuard<DomainSearchCursorOptions>;
export declare const assertDomainSearchCursorOptions: TypeAssert<DomainSearchCursorOptions>;
