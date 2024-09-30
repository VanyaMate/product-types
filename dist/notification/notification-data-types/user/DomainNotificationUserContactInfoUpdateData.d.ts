import { DomainUserContactsInfo } from '../../../user/DomainUserContactsInfo';
import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
export type DomainNotificationUserContactInfoUpdateData = {
    user: DomainUser;
    previousContacts: DomainUserContactsInfo;
    currentContacts: DomainUserContactsInfo;
};
export declare const isDomainNotificationUserContactInfoUpdateData: TypeGuard<DomainNotificationUserContactInfoUpdateData>;
export declare const assertDomainNotificationUserContactInfoUpdateData: TypeAssert<DomainNotificationUserContactInfoUpdateData>;
