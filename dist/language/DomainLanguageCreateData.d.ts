import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageCreateData = {
    title: string;
};
export declare const isDomainLanguageCreateData: TypeGuard<DomainLanguageCreateData>;
export declare const assertDomainLanguageCreateData: TypeAssert<DomainLanguageCreateData>;
