import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationLanguageFolderDeletedData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageFolderDeletedData: TypeGuard<DomainNotificationLanguageFolderDeletedData>;
export declare const assertDomainNotificationLanguageFolderDeletedData: TypeAssert<DomainNotificationLanguageFolderDeletedData>;
