import { TypeAssert, TypeGuard } from '../_helpers/types';
import { DomainServiceErrorItem } from './DomainServiceErrorItem';
export type DomainServiceResponseError = {
    errors: DomainServiceErrorItem[];
};
export declare const isDomainServiceResponseError: TypeGuard<DomainServiceResponseError>;
export declare const assertDomainServiceResponseError: TypeAssert<DomainServiceResponseError>;
