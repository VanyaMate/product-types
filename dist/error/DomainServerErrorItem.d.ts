import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainServerErrorItem = {
    code: number;
    target: string;
    messages: string[];
};
export declare const isDomainServerErrorItem: TypeGuard<DomainServerErrorItem>;
export declare const assertDomainServerErrorItem: TypeAssert<DomainServerErrorItem>;
