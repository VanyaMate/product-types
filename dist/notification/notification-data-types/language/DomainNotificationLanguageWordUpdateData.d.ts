import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguageWord } from '../../../language/DomainLanguageWord';
import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationLanguageWordUpdateData = {
    word: DomainLanguageWord;
    folder: DomainLanguageFolder;
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageWordUpdateData: TypeGuard<DomainNotificationLanguageWordUpdateData>;
export declare const assertDomainNotificationLanguageWordUpdateData: TypeAssert<DomainNotificationLanguageWordUpdateData>;
