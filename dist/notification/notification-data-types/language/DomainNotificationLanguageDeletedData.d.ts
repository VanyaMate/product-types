import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationLanguageDeletedData = {
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageDeletedData: TypeGuard<DomainNotificationLanguageDeletedData>;
export declare const assertDomainNotificationLanguageDeletedData: TypeAssert<DomainNotificationLanguageDeletedData>;
