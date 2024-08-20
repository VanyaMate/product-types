import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageFolder = {
    id: string;
    title: string;
};
export declare const isDomainLanguageFolder: TypeGuard<DomainLanguageFolder>;
export declare const assertDomainLanguageFolder: TypeAssert<DomainLanguageFolder>;
