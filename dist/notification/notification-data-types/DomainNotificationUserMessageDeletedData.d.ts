import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationUserMessageDeletedData = {
    user: DomainUser;
    message: string;
    messageIndex: string;
};
export declare const isDomainNotificationUserMessageDeletedData: TypeGuard<DomainNotificationUserMessageDeletedData>;
export declare const assertDomainNotificationUserMessageDeletedData: TypeAssert<DomainNotificationUserMessageDeletedData>;
