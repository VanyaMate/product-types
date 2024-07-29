import { DomainLanguage } from '../../../language/DomainLanguage';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationLanguageUpdateData = {
    language: DomainLanguage;
};
export declare const isDomainNotificationLanguageUpdateData: TypeGuard<DomainNotificationLanguageUpdateData>;
export declare const assertDomainNotificationLanguageUpdateData: TypeAssert<DomainNotificationLanguageUpdateData>;
