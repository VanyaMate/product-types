import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationMessageRedactedData = {
    where: DomainUser;
    previousMessage: string;
    newMessage: string;
};
export declare const isDomainNotificationMessageRedactedData: TypeGuard<DomainNotificationMessageRedactedData>;
export declare const assertDomainNotificationMessageRedactedData: TypeAssert<DomainNotificationMessageRedactedData>;
