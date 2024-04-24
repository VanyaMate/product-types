import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainSimpleError = {
    message: string;
};
export declare const isDomainSimpleError: TypeGuard<DomainSimpleError>;
export declare const assertDomainSimpleError: TypeAssert<DomainSimpleError>;
