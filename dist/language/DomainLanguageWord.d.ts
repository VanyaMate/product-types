import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageWord = {
    id: string;
    original: string;
    translations: Array<string>;
    notice: string;
    checked: boolean;
};
export declare const isDomainLanguageWord: TypeGuard<DomainLanguageWord>;
export declare const assertDomainLanguageWord: TypeAssert<DomainLanguageWord>;
