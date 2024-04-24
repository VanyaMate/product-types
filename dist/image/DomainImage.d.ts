import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainImage = {
    id: string;
    title: string;
    url: string;
};
export declare const isDomainImage: TypeGuard<DomainImage>;
export declare const assertDomainImage: TypeAssert<DomainImage>;
