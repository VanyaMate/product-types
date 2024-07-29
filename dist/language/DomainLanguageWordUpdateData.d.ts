import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageWordUpdateData = {
    original?: string;
    translations?: Array<string>;
    notice?: string;
    checked?: boolean;
};
export declare const isDomainLanguageWordUpdateData: TypeGuard<DomainLanguageWordUpdateData>;
export declare const assertDomainLanguageWordUpdateData: TypeAssert<DomainLanguageWordUpdateData>;
