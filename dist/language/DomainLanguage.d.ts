import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguage = {
    id: string;
    title: string;
};
export declare const isDomainLanguage: TypeGuard<DomainLanguage>;
export declare const assertDomainLanguage: TypeAssert<DomainLanguage>;
