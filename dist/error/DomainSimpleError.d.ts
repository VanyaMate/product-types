import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainSimpleError = {
    message: string;
};
export declare const isDomainSimpleError: TypeGuard<DomainSimpleError>;
export declare const assertDomainSimpleError: TypeAssert<DomainSimpleError>;
