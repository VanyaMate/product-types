import { DomainLanguageFolder } from './DomainLanguageFolder';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainLanguageWord } from './DomainLanguageWord';
export type DomainLanguageFolderFull = DomainLanguageFolder & {
    words: Array<DomainLanguageWord>;
};
export declare const isDomainLanguageFolderFull: TypeGuard<DomainLanguageFolderFull>;
export declare const assertDomainLanguageFolderFull: TypeAssert<DomainLanguageFolderFull>;
