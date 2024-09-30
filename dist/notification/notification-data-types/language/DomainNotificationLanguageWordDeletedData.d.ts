import { DomainLanguageWord } from '../../../language/DomainLanguageWord';
import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationLanguageWordDeletedData = {
    word: DomainLanguageWord;
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageWordDeletedData: TypeGuard<DomainNotificationLanguageWordDeletedData>;
export declare const assertDomainNotificationLanguageWordDeletedData: TypeAssert<DomainNotificationLanguageWordDeletedData>;
