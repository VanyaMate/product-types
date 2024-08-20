import { DomainLanguage } from './DomainLanguage';
import { DomainLanguageFolder } from './DomainLanguageFolder';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageWithFolders = DomainLanguage & {
    folders: Array<DomainLanguageFolder>;
};
export declare const isDomainLanguageWithFolders: TypeGuard<DomainLanguageWithFolders>;
export declare const assertDomainLanguageWithFolders: TypeAssert<DomainLanguageWithFolders>;
