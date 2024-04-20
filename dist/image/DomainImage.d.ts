import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainImage = {
    id: string;
    title: string;
    url: string;
};
export declare const isDomainImage: TypeGuard<DomainImage>;
export declare const assertDomainImage: TypeAssert<DomainImage>;
