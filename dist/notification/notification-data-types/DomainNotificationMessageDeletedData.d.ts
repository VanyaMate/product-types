import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationMessageDeletedData = {
    where: DomainUser;
    message: string;
};
export declare const isDomainNotificationMessageDeletedData: TypeGuard<DomainNotificationMessageDeletedData>;
export declare const assertDomainNotificationMessageDeletedData: TypeAssert<DomainNotificationMessageDeletedData>;
