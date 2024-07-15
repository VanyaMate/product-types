import { DomainServiceErrorItem } from './DomainServiceErrorItem';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainServiceResponseError = {
    errors: DomainServiceErrorItem[];
};
export declare const isDomainServiceResponseError: TypeGuard<DomainServiceResponseError>;
export declare const assertDomainServiceResponseError: TypeAssert<DomainServiceResponseError>;
