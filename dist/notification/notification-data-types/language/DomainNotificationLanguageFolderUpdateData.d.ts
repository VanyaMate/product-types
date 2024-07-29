import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguage } from '../../../language/DomainLanguage';
export type DomainNotificationLanguageFolderUpdateData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
};
export declare const isDomainNotificationLanguageFolderUpdateData: TypeGuard<DomainNotificationLanguageFolderUpdateData>;
export declare const assertDomainNotificationLanguageFolderUpdateData: TypeAssert<DomainNotificationLanguageFolderUpdateData>;
