import { DomainLanguage } from './DomainLanguage';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainLanguageFolderFull } from './DomainLanguageFolderFull';
export type DomainLanguageFull = DomainLanguage & {
    folders: DomainLanguageFolderFull;
};
export declare const isDomainLanguageFull: TypeGuard<DomainLanguageFull>;
export declare const assertDomainLanguageFull: TypeAssert<DomainLanguageFull>;
