import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguageWord } from '../../../language/DomainLanguageWord';
import { DomainLanguageFolder } from '../../../language/DomainLanguageFolder';
import { DomainLanguage } from '../../../language/DomainLanguage';
export type DomainNotificationLanguageWordCreateData = {
    word: DomainLanguageWord;
    folder: DomainLanguageFolder;
    language: DomainLanguage;
};
export declare const isDomainNotificationLanguageWordCreateData: TypeGuard<DomainNotificationLanguageWordCreateData>;
export declare const assertDomainNotificationLanguageWordCreateData: TypeAssert<DomainNotificationLanguageWordCreateData>;
