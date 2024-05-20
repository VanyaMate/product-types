import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationMessageData = {
    from: DomainUser;
    message: string;
};
export declare const isDomainNotificationMessageData: TypeGuard<DomainNotificationMessageData>;
export declare const assertDomainNotificationMessageData: TypeAssert<DomainNotificationMessageData>;
