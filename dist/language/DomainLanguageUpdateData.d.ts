import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageUpdateData = {
    title: string;
};
export declare const isDomainLanguageUpdateData: TypeGuard<DomainLanguageUpdateData>;
export declare const assertDomainLanguageUpdateData: TypeAssert<DomainLanguageUpdateData>;
