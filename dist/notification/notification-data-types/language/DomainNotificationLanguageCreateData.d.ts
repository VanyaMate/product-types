import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguage } from '../../../language/DomainLanguage';
import { DomainUser } from '../../../user/DomainUser';
export type DomainNotificationLanguageCreateData = {
    language: DomainLanguage;
    owner: DomainUser;
};
export declare const isDomainNotificationLanguageCreateData: TypeGuard<DomainNotificationLanguageCreateData>;
export declare const assertDomainNotificationLanguageCreateData: TypeAssert<DomainNotificationLanguageCreateData>;
