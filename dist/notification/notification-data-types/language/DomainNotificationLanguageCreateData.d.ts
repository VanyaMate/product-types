import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainLanguage } from '../../../language/DomainLanguage';
export type DomainNotificationLanguageCreateData = {
    language: DomainLanguage;
};
export declare const isDomainNotificationLanguageCreateData: TypeGuard<DomainNotificationLanguageCreateData>;
export declare const assertDomainNotificationLanguageCreateData: TypeAssert<DomainNotificationLanguageCreateData>;
