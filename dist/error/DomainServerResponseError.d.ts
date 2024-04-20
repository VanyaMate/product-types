import { TypeAssert, TypeGuard } from '../_helpers/types';
import { DomainServerErrorItem } from './DomainServerErrorItem';
export type DomainServerResponseError = {
    errors: DomainServerErrorItem[];
};
export declare const isDomainServerResponseError: TypeGuard<DomainServerResponseError>;
export declare const assertDomainServerResponseError: TypeAssert<DomainServerResponseError>;
