import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationLanguageFolderUpdateData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageFolderUpdateData: TypeGuard<DomainNotificationLanguageFolderUpdateData>;
export declare const assertDomainNotificationLanguageFolderUpdateData: TypeAssert<DomainNotificationLanguageFolderUpdateData>;
