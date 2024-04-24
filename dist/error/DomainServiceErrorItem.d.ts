import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainServiceErrorItem = {
    code: number;
    target: string;
    title: string;
    messages: string[];
};
export declare const isDomainServiceErrorItem: TypeGuard<DomainServiceErrorItem>;
export declare const assertDomainServiceErrorItem: TypeAssert<DomainServiceErrorItem>;
