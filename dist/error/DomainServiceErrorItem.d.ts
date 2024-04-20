import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainServiceErrorItem = {
    code: number;
    target: string;
    messages: string[];
};
export declare const isDomainServiceErrorItem: TypeGuard<DomainServiceErrorItem>;
export declare const assertDomainServiceErrorItem: TypeAssert<DomainServiceErrorItem>;
