import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationLanguageFolderCreateData = {
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageFolderCreateData: TypeGuard<DomainNotificationLanguageFolderCreateData>;
export declare const assertDomainNotificationLanguageFolderCreateData: TypeAssert<DomainNotificationLanguageFolderCreateData>;
